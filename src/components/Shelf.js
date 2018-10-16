import React, { Component } from 'react'
import Book from './Book.js'

export default class Shelf extends Component {
	componentDidMount() {
		console.log( 'mounted' );
	}

	render() {
		return (
			<div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  this.props.books.map((book, key) => <Book updateShelf = {this.props.updateShelf} book={book} key= {key}/>)
                }
              </ol>
            </div>
          </div>

        </div>
      </div>
		);
	}
}
