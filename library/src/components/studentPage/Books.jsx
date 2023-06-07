import React, { Component } from "react";
//import image from "../../images/library.jpg";

import "./Books.css";
import SearchForm from "./components/search/SearchForm";
import BookList from "./components/BookList/BookList";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/footer";

export default class Books extends Component {
  render() {
    return (
      <div id="books">
        <Navbar/>
          <div>
            <h2>
              <strong> LIBRARY BOOKS </strong>
            </h2>
            <div className="book">
              <SearchForm />
            </div>
          </div>
          <div className="books-body">
            <BookList />
          </div>
          <Footer/>
      </div>
    );
  }
}
