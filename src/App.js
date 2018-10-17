import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './views/Home.js'
import Search from './views/Search.js'


class BooksApp extends React.Component {

	render() {
		return (
			<div>
        <Route exact path ="/" component= { Home } />
        <Route exact path ="/search" component= { Search } />
      </div>
		);
	}
}

export default BooksApp
