import React, { Component } from 'react'
import Book from './Book.js'

export default class Shelf extends Component {
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
