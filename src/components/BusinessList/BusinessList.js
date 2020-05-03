import React, { Component } from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

export class BusinessList extends Component {
  render() {
    return (
      <div>
        <div className='BusinessList'>
          {this.props.businesses.map((business) => {

            //Adds a key property to the rendered <Business /> component.
            //And sets it equal to the ID of business.
            return <Business key={business.id} business={business} />;
          })}
        </div>
      </div>
    );
  }
}

export default BusinessList;
