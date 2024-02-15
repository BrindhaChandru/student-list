import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import StudentList from './StudentList';
import FavoriteStudents from './FavoriteStudents';
import { FavoritesContext } from './FavoritesContext';

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
<>    
    <BrowserRouter>
    <Routes>
      <FavoritesContext.Provider value={{ favorites, setFavorites }}>
        
          <Route exact path="/" component={StudentList} />
          <Route exact path="/favorites" component={FavoriteStudents} />
        
      </FavoritesContext.Provider>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
