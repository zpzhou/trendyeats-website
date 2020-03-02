import { combineReducers } from 'redux';
import { ACTION_TYPES, TIME_FRAMES } from '../actions/actions'

const handleLocationUpdate = (state = '', action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_LOCATION:
            return action.location;
        default:
            return state;
    }
};

const handleLocationSuggestionsUpdate = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_LOCATION_SUGGESTIONS:
            return action.suggestions;
        default:
            return state;
    }
};

const handleAreLocationsLoadingUpdate = (state = false, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_ARE_LOCATIONS_LOADING:
            return action.areLocationsLoading;
        default:
            return state;
    }
};

const handleTimeFrameUpdate = (state = TIME_FRAMES.ONE_DAY, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_TIME_FRAME:
            return action.timeFrame;
        default:
            return state;
    }
};

const handleAreTrendsLoadingUpdate = (state = false, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_ARE_TRENDS_LOADING:
            return action.areTrendsLoading;
        default:
            return state;
    }
}

const handleIsDisplayingResultsUpdate = (state = false, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_IS_DISPLAYING_RESULTS:
            return action.isDisplayingResults;
        default:
            return state;
    }
}

const handleTrendsUpdate = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_TRENDS:
            return action.trends;
        default:
            return state;
    }
}

const handleActivePageUpdate = (state = 1, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_ACTIVE_PAGE:
            return action.page;
        default:
            return state;
    }
}

const reducer = combineReducers({
    location: handleLocationUpdate,
    locationSuggestions: handleLocationSuggestionsUpdate,
    areLocationsLoading: handleAreLocationsLoadingUpdate,
    timeFrame: handleTimeFrameUpdate,
    trends: handleTrendsUpdate,
    areTrendsLoading: handleAreTrendsLoadingUpdate,
    isDisplayingResults: handleIsDisplayingResultsUpdate,
    activePage: handleActivePageUpdate
});

export default reducer;
