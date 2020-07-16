import React, { component } from "react";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListEntry = (props) => (
  <tr className="hover">
    <td className="star">
    <FontAwesomeIcon icon={faStar} onClick={props.favorites} />
      </td>
    <td><img height='50' src={props.media.thumbUrl}></img></td>
    <td>{props.name}</td>
    <td>{props.highestbid}</td>
    <td>{props.lastsale}</td>
  </tr>

)

export default ListEntry;