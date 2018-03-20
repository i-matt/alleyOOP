import React from 'react';
import axios from 'axios';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "",
            name: ""
        };
    }

    componentDidMount = () =>{
        axios.get("/api/person/4")
            .then(resp=>{
                debugger;
                // let object = resp.data.Items;
                // let length = resp.data.Items.length;
                // let description = object[length-1].Description;
                let description = resp.data.Item.Description;
                let name = resp.data.Item.Username;
                this.setState({
                    text: description,
                    name: name
                });
            })
    }


    handleChange = (e) =>{
        let value = e.target.value;
        let name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    handleClick = (e) =>{
        let data = {
            accountId : "4",
            username: "Deadpool",
            photoId: "0",
            description : this.state.text
        }
        
        axios.put("/api/person/4", data)
            .then(resp =>{
                console.log(resp);
            })
    }
    

    render(){
        return(
            <div className="panel-heading">
                <p> <strong>{this.state.name}</strong></p>
                <p> {this.state.text} </p>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Update Profile</button>
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Description</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <textarea className="form-control" onChange = {this.handleChange} value={this.state.text} name="text">

                                        </textarea>
                                    </div>
                                    <div className="checkbox">
                                        <label><input type="checkbox"/> Do you know da wae?</label>
                                    </div>
                                    <button type="button" onClick={this.handleClick} className="btn btn-primary" data-dismiss="modal">Update</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;