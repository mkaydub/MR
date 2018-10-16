import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from '../components/Book.js'
import Shelf from '../components/Shelf.js'
import '../App.css'


export default class Search extends Component {
	constructor() {
		super();
		this.state = {
			books: [],
			query: '',
			results: []
		}
	}

	componentDidMount() {
		BooksAPI.getAll()
			.then( allBooks => {
				this.setState( { books: allBooks } )
			} )
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

	updateQuery = ( query ) => {
		this.setState( { query: query }, this.searchResults );
	}
	render() {
		return (
			<div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
		);
	}
}
