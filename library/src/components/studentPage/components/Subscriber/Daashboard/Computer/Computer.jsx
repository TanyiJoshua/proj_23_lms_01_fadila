import React, { Component } from "react";
//import image from "../../images/library.jpg";

//import "./Computer.css";
import SearchForm from "../../../search/SearchForm";
import BookList from "../../../BookList/BookList";
import Navbar from "../../../../../HomePage/Navbar";
import Footer from "../../../../../HomePage/footer";

export default class Computer extends Component {
  render() {
    return (
      <div id="books">
        <Navbar/>
        <div className="row about" id="computer">
          <div>
            <h2>
              <strong> Computer Science and Information Technology </strong>
            </h2>
            <div className="book">
              <SearchForm />
            </div>
          </div>
          <div className=" books-body">
            <BookList />
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
