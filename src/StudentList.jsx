import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from './FavoritesContext';

const students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

function StudentList() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const addToFavorites = (student) => {
    setFavorites([...favorites, student]);
  };

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}
            <button onClick={() => addToFavorites(student)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
      <Link to="/favorites">Go to Favorites</Link>
    </div>
  );
}

export default StudentList;
