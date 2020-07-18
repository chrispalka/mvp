import React, { component } from "react";
import ListEntry from './ListEntry.jsx'

const List = (props) => (
  <tbody>
    {props.results.map((x, key) =>
      <ListEntry name={x.name} highestBid={x.highest_bid} lastSale={x.last_sale} media={x.media} key={key} url={x.url} favoriteClicked={props.favoriteClicked} favorites={props.favorites} />
    )}
  </tbody>
)

export default List;


