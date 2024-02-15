import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './FavoritesContext';

function FavoriteStudents() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favorite Students</h1>
      <ul>
        {favorites.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
      <Link to="/">Go back to Student List</Link>
    </div>
  );
}

export default FavoriteStudents;
