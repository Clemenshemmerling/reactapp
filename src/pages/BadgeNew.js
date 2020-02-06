import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return(
      <div>
        <Navbar/>
        <div className="BadgeNew__hero">
          <img src={header} alt="Logo" className="img-fluid"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge 
                firstName="Clemens" 
                lastName="Hemmerling"
                jobTitle="Developer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;