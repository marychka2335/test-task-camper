import { Routes, Route } from 'react-router-dom';
import CatalogPage from 'pages/CatalogPage';
import FavoritePage from 'pages/FavoritePage';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from '../pages/HomePage';


 export const App = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="favorites" element={<FavoritePage />} />
            {/* <Route path="*" element={<HomePage />} /> */}
          </Route>
        </Routes>
      </div>
    );
  };

