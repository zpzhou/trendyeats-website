import cities from '../util/cities';

export const ACTION_TYPES = Object.freeze({
    UPDATE_LOCATION: "UPDATE_LOCATON",
    UPDATE_LOCATION_SUGGESTIONS: "UPDATE_LOCATION_SUGGESTIONS",
    UPDATE_ARE_LOCATIONS_LOADING: "UPDATE_ARE_LOCATIONS_LOADING",
    UPDATE_TIME_FRAME: "UPDATE_TIME_FRAME",
    UPDATE_ARE_TRENDS_LOADING: "UPDATE_ARE_TRENDS_LOADING",
    UPDATE_IS_DISPLAYING_RESULTS: "UPDATE_IS_DISPLAYING_RESULTS",
    UPDATE_TRENDS: "UPDATE_TRENDS",
    SEARCH_TRENDS: "SEARCH_TRENDS",
    UPDATE_ACTIVE_PAGE: "UPDATE_ACTIVE_PAGE"
 }); 
 
 export const TIME_FRAMES = Object.freeze({ 
    ONE_DAY: 'one-day', 
    THREE_DAY: 'three-day',
    WEEK: 'week'
});

export const updateLocationAction = location => ({
    type: ACTION_TYPES.UPDATE_LOCATION,
    location
});

export const updateLocationSuggestions = suggestions => ({
    type: ACTION_TYPES.UPDATE_LOCATION_SUGGESTIONS,
    suggestions 
});

export const updateTimeFrameAction = timeFrame => ({
    type: ACTION_TYPES.UPDATE_TIME_FRAME,
    timeFrame
});

export const updateIsDisplayingResults = isDisplayingResults => ({
    type: ACTION_TYPES.UPDATE_IS_DISPLAYING_RESULTS,
    isDisplayingResults 
});

export const updateAreLocationsLoading = areLocationsLoading => ({
    type: ACTION_TYPES.UPDATE_ARE_LOCATIONS_LOADING,
    areLocationsLoading 
});

export const updateAreTrendsLoading = areTrendsLoading => ({
    type: ACTION_TYPES.UPDATE_ARE_TRENDS_LOADING,
    areTrendsLoading 
});

export const updateTrends = trends => ({
    type: ACTION_TYPES.UPDATE_TRENDS,
    trends 
});

export const updateActivePage = page => ({
    type: ACTION_TYPES.UPDATE_ACTIVE_PAGE,
    page
});

export const searchLocationAction = input => dispatch => {
    dispatch(updateLocationAction(input))
    dispatch(updateAreLocationsLoading(true));
    const regex = new RegExp(`^${input}`, 'i');
    const suggestions = Object.keys(cities)
        .flatMap(key => cities[key]
            .filter(city => regex.test(city))
            .map(city => ({ division: key, city: city}))
        );
    dispatch(updateLocationSuggestions(suggestions));
    dispatch(updateAreLocationsLoading(false));
};

export const searchTrendsAction = (location, timeFrame) => dispatch => {
    dispatch(updateIsDisplayingResults(false));
    dispatch(updateAreTrendsLoading(true));
    const url = `/trends?place=${location}&timeframe=${timeFrame}`;
    fetch(url, { 
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => { 
        const trends = data.trends;
        dispatch(updateTrends(trends));
        dispatch(updateAreTrendsLoading(false));
        dispatch(updateIsDisplayingResults(true));
        dispatch(updateActivePage(1));
    });
};

