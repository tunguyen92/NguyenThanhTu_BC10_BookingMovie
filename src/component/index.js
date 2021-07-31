import React, { Component } from "react";
import "./style.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import data from "../danhSachGhe.json";
import HangGhe from "./HangGhe";
// import { connect } from "react-redux";

export default class TicketBooking extends Component {
  renderHangGhe = () => {
    return data.map((item, index) => {
      return <HangGhe hangGhe={item} key={index} soHangGhe={index} />;
    });
  };

  render() {
    return (
      <div className="banner">
        <div className="layer-mask">
          <h1>Movie Ticket Booking Widget</h1>
          <h2>Multiplex Theatre Showing Screen 1</h2>
          <div className="container-fluid">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-8 text-center">
                <div className="screen">SCREEN</div>
                <div className="danhSachGhe">{this.renderHangGhe()}</div>
              </div>
              <div className="col-4">
                <h3>Start Selecting</h3>
                <ul className="seat">
                  <li className="greenBox">Selected Seat</li>
                  <li className="redBox">Reserved Seat</li>
                  <li className="emptyBox">Empty Seat</li>
                </ul>
                <ThongTinDatGhe />
                <div className="text-center">
                  <button className="btn btn-warning">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
