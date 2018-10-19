import React, { Component } from 'react'
import Shelf from '../components/Shelf.js'
import BookAddi from '../components/BookAddi.js'

export default class Home extends Component {

	componentDidMount = () => {
		this.props.onMountAllBooks();
		console.log( 'mountedHome' );
	}

	render() {
		return (
			<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <Shelf
        name='Currently Reading'
        onUpdateShelf = {this.props.onUpdateShelf}
        books={this.props.books.filter(b => b.shelf === 'currentlyReading')}
        />
      <Shelf
        name='Want To Read'
        onUpdateShelf = {this.props.onUpdateShelf}
        books={this.props.books.filter(b => b.shelf === 'wantToRead')}
        />
      <Shelf
        name='Read'
        onUpdateShelf = {this.props.onUpdateShelf}
        books={this.props.books.filter(b => b.shelf === 'read')}
        />
      <BookAddi></BookAddi>
    </div>
		);
	}
}
