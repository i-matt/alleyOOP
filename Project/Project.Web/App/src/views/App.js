import React from "react";
import Pokemon from '../components/Pokemon';
import thunder from '../images/thunder.png';
import ravens from '../images/ravens.png';

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
              <p>This is my app</p>
              <div className="form-group">
                <label>Select a color:</label>
                <select onChange={this.handleChange} className="form-control" id="panelColor">
                  <option value="0">None</option>
                  <option value="1">Blue</option>
                  <option value="2">Yellow</option>
                  <option value="3">Red</option>
                  <option value="4">Green</option>
                </select>
              </div>
              <button onClick={() => this.handlePanelColor(this.state.value)} className="btn btn-primary align-left"> Ok
              </button>
              <div className="panel-group">
                <div className={this.state.panelClass}>
                  <div className="panel-heading">
                    <img src="https://cdn-images-1.medium.com/max/1920/1*-4nkXQYN05ljzfJez_azbg.jpeg" className="img-responsive" alt="profilePic"/>
                  </div>
                </div>
                <div className={this.state.panelClass}>
                  <div className="panel-heading">
                    <p> <strong>Deadpool</strong></p>
                    <p> I like to slice things. Bang bang. </p>
                    <button type="button" className="btn btn-primary">Update Profile </button>
                  </div>
                </div>
                <div className={this.state.panelClass}>
                  <div className="panel-heading">
                    <Pokemon/>
                  </div>
                </div>
                {/* <div className={this.state.panelClass}>
                  <div className="panel-heading"> */}
                    <iframe src="https://open.spotify.com/embed?uri=spotify:user:erebore:playlist:788MOXyTfcUb1tdw4oC7KJ"
                    width="360" className="smallMargin" height="75" frameBorder="0" allow="encrypted-media" allowtransparency="true"></iframe>
                  {/* </div>
                </div> */}
              </div>
            </div>
            <div className="col-md-8">
              <div className="panel-group">

                <div className="row">
                  <div className="col-md-9 noPadding">
                    <div className={this.state.panelClass}>
                      <div className="panel-heading"> 
                        <iframe width="555" height="315" src="https://www.youtube.com/embed/xa-4IAR_9Yw" frameBorder="0" encrypted-media allowFullScreen></iframe>
                      </div> 
                    </div>
                  </div>
                  <div className="col-md-3 noPadding">
                    <div className={this.state.panelClass}>
                      <div className="panel-heading">
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row smallMargin">
                  <div className={this.state.panelClass}>
                    <div className="panel-body">
                      <img src= {thunder} alt="basketball" className="img-responsive"/>
                    </div>
                  </div>
                  <div className={this.state.panelClass}>
                    <div className="panel-heading">
                    </div>
                    <div className="panel-body">
                      <img src={ravens} alt="football" className="img-responsive"/>
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