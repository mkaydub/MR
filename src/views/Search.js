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
			results: [],
			searchError: false
		}
	}

	componentDidMount = () => {
		this.props.onMountAllBooks();
		console.log( 'mountedSearch' );
	}

	updateQuery = ( query ) => {
		this.setState( { query: query }, this.searchResults );
	}

	searchResults() {
		if ( this.state.query === '' ||
			this.state.query === undefined ) {
			return this.setState( { results: [], searchError: false } );
		}
		BooksAPI.search( this.state.query.trim() ).then( ( returned => {
			if ( returned.error ) {
				return this.setState( { results: [], searchError: true } );
			} else {
				returned.forEach( b => {
					let i = this.state.books.filter( B => B.id === b.id );
					if ( i[ 0 ] ) { b.shelf = i[ 0 ].shelf; }
				} );
				return this.setState( { results: returned, searchError: false } );
			}
		} ) );
	}


	render() {
		const { searchError } = this.state;
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
								onUpdateShelf = {this.props.onUpdateShelf}
								book= {book}
								key= {key}
								/>
						)}
					</ol>
        </div>
				{searchError && (
					<h2 className="searchError">No Books in your Search! Try searching something else</h2>
				)}
      </div>
		);
	}
}

Search.propTypes = {
	books: PropTypes.array,
	updateShelf: PropTypes.func,
	results: PropTypes.array
}
