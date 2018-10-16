import React, { Component } from 'react'
import Book from './Book.js'
import * as BooksAPI from '../BooksAPI.js'

export default class Shelf extends Component {
	componentDidMount() {}

	render() {
		return (
			<div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <Book></Book>
              </ol>
            </div>
          </div>

        </div>
      </div>
		);
	}
}
