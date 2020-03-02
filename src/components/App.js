import React from 'react';

import Form from './Form';
import Header from './Header';
import './styles/App.css';
import SearchResults from './SearchResults';

function App(props) {
  return (
    <div className="app">
      <Header/>
      <Form/>
      <SearchResults/>
    </div>
  );
}

export default App;
