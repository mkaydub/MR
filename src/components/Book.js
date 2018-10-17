import React, { Component } from 'react'
import noCoverImage from '../images/nocover.png'

export default class Book extends Component {

	render() {
		const bookImage = this.props.book.imageLinks ?
			this.props.book.imageLinks.thumbnail :
			noCoverImage;

		return (
			<li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{ width: 128, height: 193,
                backgroundImage: `url('${bookImage}')` }}>
            </div>
            <div className="book-shelf-changer">
              <select
                value= {this.props.book.shelf || "none"}
                onChange={(event) => {this.props.updateShelf(this.props.book, event.target.value)}}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">By: {this.props.book.authors ? this.props.book.authors.join(', ') : 'No Author'}</div>
        </div>
      </li>
		);
	}
}
