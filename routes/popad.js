var express = require('express');
var router = express.Router();


router.get("/:keyword/:browser",function(req,res,next){
    var keyword = req.params.keyword;
    var browser=req.params.browser;
    console.log("popad api",keyword,"and",browser);
    res.json({ confirmation: 'success',
                    message: 'pop ad api working',
                    keyword:keyword,
                    browser:browser
        });
    
    
    
    
})

module.exports = router;