import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <Link to="/donations">Send Me Money </Link>
            </div>
        )
    }
}

export default Footer;