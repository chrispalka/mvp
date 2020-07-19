import React, { component } from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from "@fortawesome/free-regular-svg-icons";
library.add(fas)

const FavoritesEntry = (props) => (
  <tr className="hover">
    <td className="star">
    <FontAwesomeIcon icon={ props.savedFavorites[props.name] === true ? ['fas', 'star'] : faStar } onClick={() => props.handleFavorite([props.name, props.highestBid, props.lastSale, props.url, props.media])} />
      </td>
    <td><img height='50' src={props.media}></img></td>
    <td>{props.name}</td>
    <td>{props.highestBid}</td>
    <td>{props.lastSale}</td>
  </tr>
)

export default FavoritesEntry;