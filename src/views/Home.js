import React, { Component } from 'react'
import Shelf from '../components/Shelf.js'
import BookAddi from '../components/BookAddi.js'


export default class Home extends Component {
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
