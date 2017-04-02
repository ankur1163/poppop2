import React, { Component } from 'react';
import Api from '../../utils/ApiManager';


class Totalbooks extends Component {
    constructor(){
        super()
        this.state={
            totalbooks:[],
            username:""
        }
    }
    handleasking(e){
        console.log("handle asking clicked ",e.target.id )
        var bookid = e.target.id;
        var bookownerusername;
        var selectedbooktitle;
        var selectedbookthumbnail;
        
        
        
        for(var i =0;i<this.state.totalbooks.length;i++){
            
            for(var j=0;j<this.state.totalbooks[i].mybooks.length;j++){
            
                if(this.state.totalbooks[i].mybooks[j].isbn===bookid){
                    
                    bookownerusername=this.state.totalbooks[i].username;
                    selectedbookthumbnail=this.state.totalbooks[i].mybooks[j].thumbnail;
                    selectedbooktitle=this.state.totalbooks[i].mybooks[j].title;
                    
                    
                }
                
            }
            
        }
        
        var obj = {"username":bookownerusername,"isbn":bookid,"title":selectedbooktitle,"thumbnail":selectedbookthumbnail}
        var iusername = this.state.username;
        Api.post(`/api/books/${iusername}/request`, obj, (err, response) => {
            if (err) { 
                alert("Error: " + err); 
                return;
            }
        console.log("response from server",response);
         var finbooks=[];
          
        for(var i =0;i<response.message.length;i++){
            
            finbooks.push(response.message[i])
            
        }
            this.setState({
                    totalbooks: finbooks
                });
        
            
        });
    }
    username(e){
        
        this.setState({username:e.target.value})
        
    }
    
    componentWillMount(){
          Api.get('/api/books', null, (err, response) => {
            if (err) { 
                alert("Error: " + err); 
                return;
            }
        console.log("response from server",response);
         var finbooks=[];
          
        for(var i =0;i<response.message.length;i++){
            
            finbooks.push(response.message[i])
            
        }
            this.setState({
                    totalbooks: finbooks
                });
        
            
        });
            
        }
    
    render() {
        var handleasking = this.handleasking.bind(this);
        console.log("this.state.totalbooks",this.state.totalbooks)
        var alltotalbooks = this.state.totalbooks;
        console.log("this.state.total")
        var listofallbooks=[]
        
        for(var i=0;i<this.state.totalbooks.length;i++){
            var listofallbooks2 = this.state.totalbooks[i].mybooks.map(function(item,index){
             return(
                  <div key={index} className="row resultstyle">
            <div className="col-md-1">
            </div>
            <div className="col-md-3 ">
            <img src={item.thumbnail} alt="Mountain View"  />
            </div>
            <div className="col-md-7">
            <h2>{item.title}</h2><br /><button id={item.isbn} onClick={handleasking}>I want this book</button>
            <p>{item.description}</p><br /><br />
            <p>ISBN:{item.isbn}</p>and the username who holds this book is <p>{alltotalbooks[i].username}</p>
            </div>
            <div className="col-md-1">
           
            </div>
            
            </div>
                 
                 )
             
         })
         
         listofallbooks.push(listofallbooks2);
            
        }
         
        
        
        return(<div>
        <input type="text" onChange={this.username.bind(this)} value={this.state.userAgent} />
                <h2> List of all books submitted by all members </h2><br />
                {listofallbooks}
                </div>);
    }
}

export default Totalbooks