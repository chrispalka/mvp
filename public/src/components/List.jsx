import React, { component } from "react";
import ListEntry from './ListEntry.jsx'

const List = (props) => (
  <tbody>
    {props.results.map((x, key) =>
      // console.log(x.name)
      <ListEntry name={x.name} highestbid={x.highest_bid} lastsale={x.last_sale} media={x.media} key={key} />
    )}
  </tbody>
)

export default List;


