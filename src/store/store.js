import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
var initial = {
        currentVideo: exampleVideoData[0],
        videoList: exampleVideoData
};

const store = createStore(
        rootReducer,
        initial,
        applyMiddleware(thunk)
        
        // exampleVideoData
);

export default store;