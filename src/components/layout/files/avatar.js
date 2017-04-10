import React, { Component } from 'react';
import './src/components/layout/files/avatar.css';

class Avatar extends Component {
  render() {
    return (
      <div id="avatar">
        <div className="fg-white container-fluid">
            <div className="row">
                <div className="col-xs-4">
                    <img className="img-responsive user-avatar" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAMvAAAAJDYyNmQzMWQyLWQzZWMtNDVjZC1iM2UwLTcwZmVhNWRkYTVjNQ.jpg" alt="img" />
                </div>
                <div className="col-xs-8">
                    <div className="row user-name">
                        Ayush Srivastav
                    </div>
                    <div className="row user-progress">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                            <span className="sr-only">70% Complete</span>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Avatar;