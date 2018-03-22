import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../common/footer';

class NavBar extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    handleNightMode = () => {
        let clicked = document.getElementById("nightMode").checked;
        if(clicked === true){
            let element = document.getElementById("topDiv");
            element.classList.add("nightMode");
        }
        else{
            let element = document.getElementById("topDiv");
            element.classList.remove("nightMode");
        }
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/app" className="navbar-brand"><font color="#61DAFB">OOP</font></Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                        <form className="navbar-form navbar-left" action="/action_page.php">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" name="search"/>
                                <div className="input-group-btn">
                                    <button className="btn btn-default" type="submit">
                                        <i className="glyphicon glyphicon-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <ul className="nav navbar-nav pull-right">
                            <li><img src="https://cdn-images-1.medium.com/max/1920/1*-4nkXQYN05ljzfJez_azbg.jpeg" className="profileIcon img-circle" alt="profilePic"/></li>
                            <li><a href="/app"><font color="#61DAFB"> Matt <i/></font></a></li>
                            <li><a href="/app"><font color="#61DAFB"> Home <i/></font></a></li>
                            <li><a href="/messages"><i className="fas fa-inbox"/><span className="badge">5</span></a></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href=""><i className="fas fa-cog"></i>
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                <li><a href="">Night Mode
                                    <label htmlFor="nightMode"className="switch">
                                        <input type="checkbox" id="nightMode" onClick={this.handleNightMode}/>
                                        <span className="slider round"></span>
                                    </label></a>
                                </li>
                                {/* <li><a href="">Page 1-2</a></li>
                                <li><a href="">Page 1-3</a></li> */}
                                </ul>
                            </li>
                            <li><a href="/login"><i className="fas fa-sign-out-alt"></i> Logout </a></li>
                        </ul>
                    </div>
                </nav>
                <div>
                    {this.props.children}
                </div> 
                <Footer/>
            </div>
        );
    }
}
export default NavBar;