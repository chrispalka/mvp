import React, { component } from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from "@fortawesome/free-regular-svg-icons";
library.add(fas)

const ListEntry = (props) => (
  <tr className="hover">
    <td className="star">
    <FontAwesomeIcon icon={ props.favoriteClicked[props.name] && props.favoriteClicked[props.name].status ? ['fas', 'star'] : faStar } onClick={() => props.favorites([props.name, props.highestBid, props.lastSale, props.url, props.media.thumbUrl])} />
      </td>
    <td><img height='50' src={props.media.thumbUrl}></img></td>
    <td>{props.name}</td>
    <td>{props.highestBid}</td>
    <td>{props.lastSale}</td>
  </tr>

)

export default ListEntry;