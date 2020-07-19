import React, { component } from "react";
import FavoritesEntry from './FavoritesEntry.jsx'

const Favorites = (props) => (
  <tbody>
      {Object.keys(props.favoriteResults).map((shoe, i) =>
        <FavoritesEntry name={shoe} highestBid={props.favoriteResults[shoe].highestBid} lastSale={props.favoriteResults[shoe].lastSale} media={props.favoriteResults[shoe].media} url={props.favoriteResults[shoe].url} handleFavorite={props.handleFavorite} savedFavorites={props.savedFavorites} key={i} />
      )}
    </tbody>
)


export default Favorites;

// console.log(props.favoriteResults[shoes].highestBid)