import React, { Component } from 'react'
import Shelf from '../components/Shelf.js'
import BookAddi from '../components/BookAddi.js'
import * as BooksAPI from '../BooksAPI'


export default class Home extends Component {

	constructor() {
		super();
		this.state = {
			books: []
		}
	}

	componentDidMount() {
		BooksAPI.getAll()
			.then( allBooks => {
				this.setState( { books: allBooks } );
			} );
	}

	updateShelf = ( book, shelf ) => {
		BooksAPI.update( book, shelf )
			.then( allBooks => {
				book.shelf = shelf;
				this.setState( state => ( {
					books: state.books.filter( b => b.id !== book.id ).concat( [ book ] )
				} ) )
			} );
	}

	render() {
		return (
			<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <Shelf></Shelf>
      <Shelf></Shelf>
      <Shelf></Shelf>
      <BookAddi></BookAddi>
    </div>
		);
	}
}
