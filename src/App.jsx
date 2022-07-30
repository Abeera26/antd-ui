import React from 'react';


import { Routes, Route } from 'react-router-dom';
import Data from './components/Home/Data';

const App =()=> {
  
    return(
    <div className='container'>
     <Routes>
     <Route path='/' exact element={<Data/>}/>
    </Routes> 
    </div>
    );
};

export default App;
