import React from "react";

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
                  </div>
                  <div className="panel-body">
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="panel-group">
                <div className="row">
                  <div className="col-md-6">
                    <div className={this.state.panelClass}>
                      <div className="panel-heading">
                        Panel 1
                      </div>
                      <div className="panel-body">Panel Content</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={this.state.panelClass}>
                      <div className="panel-heading">
                        Panel 2
                      </div>
                      <div className="panel-body">Panel Content</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className={this.state.panelClass}>
                    <div className="panel-heading">
                      Panel with panel-default class
                    </div>
                    <div className="panel-body">Panel Content</div>
                  </div>
                  <div className={this.state.panelClass}>
                    <div className="panel-heading">
                      Panel with panel-default class
                    </div>
                    <div className="panel-body">Panel Content</div>
                  </div>
                  <div className={this.state.panelClass}>
                    <div className="panel-heading">
                      Panel with panel-default class
                    </div>
                    <div className="panel-body">Panel Content</div>
                  </div>
                  <div className={this.state.panelClass}>
                    <div className="panel-heading">
                      Panel with panel-default class
                    </div>
                    <div className="panel-body">Panel Content</div>
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