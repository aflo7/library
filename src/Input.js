import React from "react"
import Book from "./Book"
import "./css/input.css"

class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "",
      author: ""
    }

    this.updateTitle = this.updateTitle.bind(this)
    this.updateAuthor = this.updateAuthor.bind(this)
    this.clearState = this.clearState.bind(this)
    this.submitBook = this.submitBook.bind(this)
    this.deleteBook = this.deleteBook.bind(this)
  }

  updateTitle(evt) {
    this.setState({
      title: evt.target.value
    })
  }

  updateAuthor(evt) {
    this.setState({
      author: evt.target.value
    })
  }

  clearState() {
    this.setState((prevState) => {
      return {
        title: "",
        author: "",
        size: prevState.size
      }
    })
  }

  submitBook() {
    const newBook = this.state

    localStorage.setItem(Date.now(), JSON.stringify(newBook))

    this.clearState()
  }

  deleteBook(key) {
    localStorage.removeItem(key)
    this.forceUpdate()
  }

  render() {
    let currBooks = Object.keys(localStorage)
    let bookComponents = []

    for (let i = 0; i < localStorage.length; i++) {
      let bookInfo = JSON.parse(localStorage.getItem(currBooks[i]))

      bookComponents.push(
        <Book
          key={currBooks[i]}
          uniqueID={currBooks[i]}
          bookTitle={bookInfo.title}
          bookAuthor={bookInfo.author}
          clicky={this.deleteBook}
        />
      )
    }

    return (
      <div className="input-fields">
        <div className="title-wrapper">
          <div>Book Title:</div>
          <input
            value={this.state.title}
            className="title-input"
            onChange={(evt) => this.updateTitle(evt)}
          />
        </div>

        <div className="author-wrapper">
          <div>Author:</div>
          <input
            value={this.state.author}
            className="author-input"
            onChange={(evt) => this.updateAuthor(evt)}
          />
        </div>
        <button className="add-book-btn" onClick={() => this.submitBook()}>Add book</button>
        {bookComponents}
      </div>
    )
  }
}

export default Input
