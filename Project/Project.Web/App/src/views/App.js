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
                    <img src="https://cdn-images-1.medium.com/max/1920/1*-4nkXQYN05ljzfJez_azbg.jpeg" className="img-responsive" alt="profilePic"/>
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
                    <iframe src="https://open.spotify.com/embed?uri=spotify:user:erebore:playlist:788MOXyTfcUb1tdw4oC7KJ"
                    width="360" className="smallMargin" height="75" frameBorder="0" allow="encrypted-media" allowtransparency="true"></iframe>
                  </div>
                </div>
                <div className={this.state.panelClass}>
                  <div className="panel-heading">
                    This is empty
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="panel-group">
                <div className="noPadding">
                  <div className={this.state.panelClass}>
                    <div className="panel-heading video-container"> 
                      <iframe src="https://www.youtube.com/embed/k4hcdxTHARw" frameborder="0" allowfullscreen></iframe>                    
                    </div> 
                  </div>
                  <div className={this.state.panelClass}>
                    <div className="panel-heading video-container"> 
                      <iframe src="https://www.youtube.com/embed/BwWK2Xd9gWI" frameborder="0" allowfullscreen></iframe>
                    </div> 
                  </div>
                  <div className={this.state.panelClass}>
                    <div className="panel-heading video-container"> 
                      <iframe src="https://www.youtube.com/embed/xa-4IAR_9Yw" frameBorder="0" allowFullScreen></iframe>
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