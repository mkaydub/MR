import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './views/Home.js'
import Search from './views/Search.js'
import * as BooksAPI from './BooksAPI.js'


class BooksApp extends React.Component {
	state = {
		books: [],
	}

	componentDidMount = () => {
		this.mountAllBooks();
	}

	mountAllBooks = () => {
		BooksAPI.getAll()
			.then( allBooks => {
				this.setState( {
					books: allBooks
				} );
			} );
	}


	updateShelf = ( book, shelf ) => {
		BooksAPI.update( book, shelf )
			.then( allBooks => {
				book.shelf = shelf;
				this.setState( state => ( {
					books: this.state.books.filter( b => b.id !== book.id ).concat( [
						book
					] )
				} ) )
			} );
	}

	render() {
		return (
			<div>
        <Route exact path ="/" render={(() => (<Home
          books={this.state.books}
          onUpdateShelf={this.updateShelf}
          onMountAllBooks={this.mountAllBooks}/>))}
					/>

        <Route exact path ="/search" render={(() => (<Search
						books={this.state.books}
						onUpdateShelf={this.updateShelf}
						onMountAllBooks={this.mountAllBooks} />))}
						/>
      </div>
		);
	}
}

export default BooksApp
