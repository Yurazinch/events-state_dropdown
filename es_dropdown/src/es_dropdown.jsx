import { Component } from "react";
import './es_dropdown.css';

export class EsDropdownFn extends Component {

    constructor(props) {
        super(props);
        this.state = {likes: 0};
        this.toggleOpen = this.toggleOpen.bind(this);
    } 
    
    toggleOpen() {
        this.setState( { likes: this.state.likes + 1 } );
        //this.state.likes % 2 !== 0 ? this.wrapperClass = 'dropdown-wrapper open' : this.wrapperClass = 'dropdown-wrapper';
        //React.querySelector('[data-id=dropdown]').map(item => item === Event.target ? item.style = 'className="active"' : item.style = '' );
    }   

    render() {
        
        return (            
            <div className="container">
                <div data-id="wrapper" className=/*{this.wrapperClass}*/"dropdown-wrapper open">
                    <button data-id="toggle" className="btn" onClick={this.toggleOpen}>
                        <span>Account Settings</span>
                        <i className="material-icons">public</i>
                    </button>
                    <ul data-id="dropdown" className="dropdown">
                        <li><a href="/#">Profile Information</a></li>
                        <li><a href="/#">Change Password</a></li>
                        <li><a href="/#">Become PRO</a></li>
                        <li><a href="/#">Help</a></li>
                        <li><a href="/#">Log Out</a></li>
                    </ul>
                </div>
            </div>  
        )
    }
}