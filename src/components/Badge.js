import React from 'react';
import './styles/Badge.css';
import logo from '../images/badge-header.svg';
import avatar from '../images/avatar.png';



class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={logo} alt="Logo" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar" 
            src={avatar} 
            alt="Avatar"
          />
          <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
        </div>
        
        <div className="Badge__section-info">
          <p>{this.props.jobTitle}</p>
          <p>@clemens</p>
        </div>

        <div className="Badge__footer">#Clemens</div>

      </div>
    );
  }
}

export default Badge;