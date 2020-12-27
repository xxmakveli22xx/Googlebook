import React, { useState, useEffect } from "react";
import SearchedCard from "../components/Card"
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { List} from "../components/List";

function Saved() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

//   Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }


    return (
      <Container fluid>
            {books.length ? (
              <List>
                {books.map(book => (
                  <SearchedCard
                    imgSrc={book.imgLink}
                    title={book.title}
                    author={book.author}
                    summary={book.synopsis}
                    handleClick={() => deleteBook(book._id)}
                    saveDelete="Delete"
                    view={book.link}
                  />
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </Container>
    );
  }


export default Saved;