import React from 'react';
import '../styles/App.css';
import '../styles/index.css';
import final from '../images/final.gif';

class Header extends React.Component{
    render(){
        return(
            <header className="App-header">
              <h1 className="App-title"><img src={final} className="App-logo" alt="logo" /><font color="#61DAFB">alley OOP</font><img src={final} className="App-logo" alt="logo" /></h1>
            </header>
        )
    }
}
export default Header;