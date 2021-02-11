import React, { Component } from "react";
import './List.css';

export default class List extends Component {
  render() {
      //console.log("rendering list")
      const formattedMatches = this.props.matches.map(place => 
        <li key={place.rank.toString()}>
            {place.city} - {place.state}
        </li>
      );

      return(
        <ul>{formattedMatches}</ul>
      )
  }
}
