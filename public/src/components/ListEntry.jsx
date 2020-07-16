import React, { component } from "react";


const ListEntry = (props) => (
  <tr className="hover">
    <td><img height='50' src={props.media.thumbUrl}></img></td>
    <td>{props.name}</td>
    <td>{props.highestbid}</td>
    <td>{props.lastsale}</td>
  </tr>

)

export default ListEntry;