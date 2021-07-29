import React, { Component } from "react";

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div className="info">
        <ul className="book-left">
          <li>Movie</li>
          <li>Time</li>
          <li>Tickets</li>
          <li>Total</li>
          <li>Seats</li>
        </ul>
        <ul className="book-right">
          <li>: Ms. Marvel</li>
          <li>: September 2, 21:00</li>
          <li>: 2</li>
          <li>: 45000</li>
          <li>: B1</li>
        </ul>
      </div>
    );
  }
}
