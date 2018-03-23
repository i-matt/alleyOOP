import React from 'react';
import axios from 'axios';
import '../styles/Deadpool.css';

class Accounts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            accounts:"",
            name:"",
            value: "",
            all: []
        };
    };

    componentDidMount = () => {
        axios.get("api/account/selectall")
            .then(resp=>{
                var accounts = resp.data.Items;
                this.setState({
                    all: accounts
                });
                console.log(this.state.all.length)
            });
    };

    handleAdd = () => {
        let data = {
            email: this.state.email,
            password: this.state.password
          };
          
        axios.post("/api/account/", data)
            .then(resp=>{
                this.componentDidMount();
            });
    }

    handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name] : value
        })
    }

    handleDelete = () => {
        axios.delete("api/account/deleteall")
            .then(resp =>{
                this.componentDidMount();
            })
    }

    mapper = () =>{
        const id = this.state.all.map((each,index) =>
            <p key={index}>
                {each.Id}
            </p>
        );

        const email = this.state.all.map((each,index) =>
            <p key={index}>
                {each.Email}
            </p>
        );

        const createdDate = this.state.all.map((each,index)=>
            <p key={index}>
                {each.CreatedDate}
            </p>
        );

        const modifiedDate = this.state.all.map((each,index)=>
            <p key={index}>
                {each.ModifiedDate}
            </p>
        );

        const modifiedBy = this.state.all.map((each,index)=>
            <p key={index}>
                {each.ModifiedBy}
            </p>
        );

        return (
            <div className="container">
                <h1>
                    User Accounts
                </h1>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addUser">Add...?</button>
                <div className="modal fade" id="addUser" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Add Some Party People</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input type="email" onChange={this.handleChange} value={this.state.email} name="email" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input type="password" onChange={this.handleChange} value={this.state.password} name="password" className="form-control"/>
                                    </div>
                                    <button type="button" onClick={this.handleAdd} className="btn btn-primary" data-dismiss="modal">Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" onClick = {this.handleDelete} className="btn btn-danger">Delete Everyone</button>
                <br/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Created Date</th>
                            <th>Modified Date</th>
                            <th>Modified By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{id}</td>
                            <td>{email}</td>
                            <td>{createdDate}</td>
                            <td>{modifiedDate}</td>
                            <td>{modifiedBy}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    
    render(){
        if(this.state.all.length === 1){
           return(
                <div>
                    {this.mapper()}
                    <img src="https://media.giphy.com/media/R2wLkrs5Uh0ty/giphy.gif" alt="deadPoolGif" id="dpToon" className="deadPool"/>
                </div>
           ) 
        }
        else{
            return(
                <div>
                    {this.mapper()}
                </div>
            )
        }
    }
}

export default Accounts;