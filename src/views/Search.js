import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from '../components/Book.js'
import '../App.css'
import PropTypes from 'prop-types';

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

	searchResults() {
		if ( this.state.query === '' ||
			this.state.query === undefined ) {
			return this.setState( { results: [] } );
		}
		BooksAPI.search( this.state.query.trim() ).then( ( returned => {
			if ( returned.error ) {
				return this.setState( { results: [] } );
			} else {
				returned.forEach( b => {
					let i = this.state.books.filter( B => B.id === b.id );
					if ( i[ 0 ] ) { b.shelf = i[ 0 ].shelf; }
				} );
				return this.setState( { results: returned } );
			}
		} ) );
	}


	render() {
		return (
			<div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
							type="text"
							placeholder="Search by title or author"
							value = {this.state.query}
							onChange={(event) => this.updateQuery(event.target.value)}
							/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
						{
							this.state.results.map( (book,key) =>
							<Book
								updateShelf = {this.updateShelf}
								book= {book}
								key= {key}
								/>
						)}
					</ol>
        </div>
      </div>
		);
	}
}

Search.propTypes = {
	books: PropTypes.array,
	updateShelf: PropTypes.func,
	results: PropTypes.array
}
