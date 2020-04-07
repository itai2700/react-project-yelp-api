import React, { Component } from 'react';
import './SearchBar.css';




export class SearchBar extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };
              
    this.sortByOptions = {
      'Best Match':'best_match',
      'Highest Rated':'rating',
      'Most Reviewed':'review_count'
    };
  }


  getSortByClass(sortByOption) {
      if(sortByOption === this.state.sortBy) {
        return 'active';
      }
        return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }


  // The purpose of renderSortByOptions() is to dynamically create the list items 
  // needed to display the sort options (Best Match, Highest Rated, Most Reviewed).

  // The method should iterate through the keys and values of the sortByOptions object
  //  and return a list item with dynamic attributes
  

    renderSortByOptions() {  
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} 
                        onClick={this.handleSortByChange.bind(this, sortByOptionValue)} 
                        key={sortByOptionValue}> {sortByOption} </li>
        });
    }
    

    render() {
        return (
                <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
        {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Let's Go</a>
  </div>
</div>
        )
    }
}

export default SearchBar
