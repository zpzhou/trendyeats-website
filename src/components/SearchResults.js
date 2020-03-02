import React from 'react';
import { connect } from 'react-redux';
import { Item, Loader, Pagination } from 'semantic-ui-react';

import Trend from './Trend';
import { updateActivePage } from '../actions/actions';
import './styles/SearchResults.css';

const PAGE_SIZE = 5;

const SearchResults = props => {

  const getTotalPages = () => {
    return Math.ceil(props.trends.length / PAGE_SIZE);
  };
  const getTrendsToDisplay = () => {
    const startIdx = props.activePage * PAGE_SIZE;
    const endIdx = startIdx + PAGE_SIZE;

    return props.trends.slice(startIdx, endIdx);
  };
  const handlePageChange = (event, { activePage }) => {
    props.onPageChange(activePage); 
  };

  if (props.areTrendsLoading) {
    return (
      <Loader active={true}/>
    );
  }
  else if (props.isDisplayingResults) {
    return (
      <div className='search-results'>
        <Pagination
          defaultActivePage={1}
          totalPages={getTotalPages()}
          onPageChange={handlePageChange}/>
        { 
          props.trends.length === 0 ? 
            <div className='no-results'>
              No results were found.
            </div> :
            null
        }
        <Item.Group>
          {
            getTrendsToDisplay().map((trend, idx) => (
              <Trend key={idx} {...trend}/>
            ))
          }
        </Item.Group>
      </div>
    );
  }
  else {
    return null;
  }
};

const mapStateToProps = state => ({
  areTrendsLoading: state.areTrendsLoading,
  isDisplayingResults: state.isDisplayingResults,
  activePage: state.activePage - 1,
  pageSize: state.pageSize,
  trends: state.trends
});

const mapDispatchToProps = dispatch => ({
  onPageChange: activePage => dispatch(updateActivePage(activePage))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);