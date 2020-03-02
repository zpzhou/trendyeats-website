import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Search, Select } from 'semantic-ui-react'

import { updateLocationAction, updateTimeFrameAction, TIME_FRAMES, searchLocationAction, searchTrendsAction } from '../actions/actions';
import './styles/Form.css';

const TIME_FRAMES_TO_USER_TEXT = {
  [TIME_FRAMES.ONE_DAY]: "Past Day",
  [TIME_FRAMES.THREE_DAY]: "Past Three Days",
  [TIME_FRAMES.WEEK]: "Past Week"
};

const Form = (props) => {

  const onSearchClick = event => {
      event.preventDefault();
      props.onSearchClick(props.location, props.timeFrame)
  };

  const searchLocationResults = props.locationSuggestions
    .map(location => ({ 
      title: location.city, 
      description: location.division
    }));

  return (
    <div className="form">
      <form>
        <Search 
          className='location-search'
          placeholder='City'
          loading={props.areLocationsLoading}
          onResultSelect={props.onLocationSelect}
          onSearchChange={props.onLocationSearchChange}
          results={searchLocationResults}
          value={props.location}/>
        <Select 
          placeholder="Time Frame"
          onChange={props.onTimeFrameChange}
          options=
          {
            Object.keys(TIME_FRAMES_TO_USER_TEXT)
              .map(timeFrame => {
                return {
                  key: timeFrame,
                  value: timeFrame,
                  text: TIME_FRAMES_TO_USER_TEXT[timeFrame]
                };
              })
          }
        />
        <Button className="search-button" 
          onClick={onSearchClick} 
          disabled={!props.location || !props.timeFrame}
          animated>
          <Button.Content visible>
            Search
          </Button.Content>
          <Button.Content hidden>
            <Icon name="search"/>
          </Button.Content>
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    location: state.location,
    locationSuggestions: state.locationSuggestions,
    areLocationsLoading: state.areLocationsLoading,
    timeFrame: state.timeFrame
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLocationSearchChange: event => {
      searchLocationAction(event.target.value)(dispatch);
    },
    onLocationSelect: (event, { result }) => {
      dispatch(updateLocationAction(result.title));
    },
    onTimeFrameChange: (event, { value }) => {
      dispatch(updateTimeFrameAction(value));
    },
    onSearchClick: (location, timeFrame) => {
      searchTrendsAction(location, timeFrame)(dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
