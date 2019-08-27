import React, { Component } from 'react';
import "./Header.css";
// import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {

    render() {
        return (
            <header className="app-header">
                <span className="app-logo">Image Viewer</span>
                <div className="profile-icon">
                    <IconButton color='secondary'></IconButton>
                </div>
                <div className="search-box-container">
                    
                </div>
                {this.props.showSearchProfileIcon === true ? 
                <div className="search-box-container">

                </div>: ""    
            }
            </header>
        )
    }
}

export default Header;