import React from "react"
import "./css/book.css"

class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.clickMe = this.clickMe.bind(this)
  }

  clickMe(key) {
    this.props.clicky(key)
  }

  render() {
    return (
      <div className="book">
        <div className="title-output">
          {this.props.bookTitle ? this.props.bookTitle : "NO_TITLE"}
        </div>
        <div className="author-output">
          {this.props.bookAuthor ? this.props.bookAuthor : "NO_AUTHOR"}
        </div>

        <div className="delete-btn-wrapper">
          <div className="edit-btn">Edit</div>
          <div
            className={"delete-btn"}
            onClick={() => this.clickMe(this.props.uniqueID)}
          >
            X
          </div>
        </div>
      </div>
    )
  }
}

export default Book
