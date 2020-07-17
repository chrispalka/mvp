import React, { component } from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from "@fortawesome/free-regular-svg-icons";
library.add(fas)

const ListEntry = (props) => (
  <tr className="hover">
    <td className="star">
      <input checked={true}>
    <FontAwesomeIcon icon={ checked ? ['fas', 'star'] : faStar } onClick={() => props.favorites(props.name)} />
      </input>
      </td>
    <td><img height='50' src={props.media.thumbUrl}></img></td>
    <td>{props.name}</td>
    <td>{props.highestbid}</td>
    <td>{props.lastsale}</td>
  </tr>

)

export default ListEntry;