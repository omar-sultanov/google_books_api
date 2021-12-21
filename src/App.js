import React from 'react'
import "./App.css"
import SearchBar from './components/SearchBar'
import BookList from './components/BookList'


const App = () => {
    return (
      <div className="App">
        <SearchBar />
      <BookList/>
       

       
      </div>
    );
}

export default App
