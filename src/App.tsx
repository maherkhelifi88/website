import React from 'react';
import {Home} from './home';
import {Restaurant} from './restaurant';
import {AddRestaurant} from './addRestaurant';
import {Influencer} from './influencer';
import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/influencer" element={<Influencer/>} />
          <Route path="/restaurant" element={<Restaurant/>} />
          <Route path="/addRestaurant" element={<AddRestaurant/>} />
        </Routes>
      </Router>
    </div>
  );
});