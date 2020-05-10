import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour";
import { tourData } from "../../tourData";

class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    const { tours } = this.state;
    const sortedTours = tours.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      tours: sortedTours,
    });
  };

  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}

export default TourList;
