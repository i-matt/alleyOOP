import React from "react";
import Pokemon from '../components/Pokemon';
import thunder from '../images/thunder.png';
import Profile from '../components/Profile';
import Sports from '../components/Sports';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panelClass: "panel panel-default"
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handlePanelColor = value => {
    let colors = [
      "panel panel-default",
      "panel panel-info",
      "panel panel-warning",
      "panel panel-danger",
      "panel panel-success",
    ];

    this.setState({
      panelClass: colors[value]
    });
  };

  changeImg = () => {
    $("#changeImg").attr('src','http://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2016/01/deadpool-ryan-reynolds-petition.jpg?itok=BcgLxkHQ')
  }

  changeImgBack = () =>{
    $("#changeImg").attr('src','https://cdn-images-1.medium.com/max/1920/1*-4nkXQYN05ljzfJez_azbg.jpeg');
  }

  render() {
    return (
      <div className="container">
        <div className="App">
          <div className="row">

            <div className="col-md-4">
              <div className="form-group">
                <label>Select a color:</label>
                <select onChange={this.handleChange} className="form-control noPadding" id="panelColor">
                  <option value="0">None</option>
                  <option value="1">Blue</option>
                  <option value="2">Yellow</option>
                  <option value="3">Red</option>
                  <option value="4">Green</option>
                </select>
              <button onClick={() => this.handlePanelColor(this.state.value)} className="btn btn-primary pull-left btn-block noPadding">
                Ok
              </button>
              </div>
              
              <br/>
              <br/>
              <div className="panel-group">
                <div className={this.state.panelClass}>
                  <div className="panel-heading">
                    <img id="changeImg" onMouseOver={this.changeImg} onMouseOut={this.changeImgBack} src="https://cdn-images-1.medium.com/max/1920/1*-4nkXQYN05ljzfJez_azbg.jpeg" className="img-responsive" alt="profilePic"/>
                  </div>
                </div>
                <div className={this.state.panelClass}>
                  <Profile/>
                </div>
                <div className={this.state.panelClass}>
                  <div className="panel-heading">
                    <Pokemon/>
                  </div>
                </div>
                <div>
                  <div className="panel-heading video-container"> 
                    <iframe src="https://open.spotify.com/embed/user/spotifycharts/playlist/37i9dQZEVXbLRQDuF5jeBp" title="spotify" width="300" height="380" allow="encrypted-media"></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="panel-group">
                <div className="noPadding">
                  <div className={this.state.panelClass}>
                    <div className="panel-heading video-container"> 
                      <iframe src="https://www.youtube.com/embed/k4hcdxTHARw" title="video1" allowFullScreen></iframe>                    
                    </div> 
                  </div>
                  <div className={this.state.panelClass}>
                    <div className="panel-heading video-container"> 
                      <iframe src="https://www.youtube.com/embed/BwWK2Xd9gWI" title="video2" allowFullScreen></iframe>
                    </div> 
                  </div>
                  <div className={this.state.panelClass}>
                    <div className="panel-heading video-container"> 
                      <iframe src="https://www.youtube.com/embed/xa-4IAR_9Yw" title="video3" allowFullScreen></iframe>
                    </div> 
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="panel-group">
                <div className=" noPadding">
                  <div className={this.state.panelClass}>
                    <div className="panel-heading">
                      <img src={thunder} className="img-responsive" alt="thunder-logo"/>
                    </div>
                  </div>
                  <div className={this.state.panelClass}>
                    <div className="panel-heading">
                      <Sports/>
                    </div>
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

export default App;