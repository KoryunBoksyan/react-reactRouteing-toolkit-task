import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { paginationArray } from '../../constants';
import './index.css';

export const Pagination = ({ setPage }) => {

  const { search } = useLocation();
  const activePage = search.split('&')[1].slice(-1);

  const handleCatCategoryPages = useCallback((pageNumber) => {
    setPage(pageNumber);
  }, []);

  return (
    <div className="slider">
      <div className="slider_container">
        {
          paginationArray.map((page) => (
            <div key={page} onClick={() => handleCatCategoryPages(page)}>
              <span>
                {page}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  );
};
