import { Link, NavLink, Outlet } from 'react-router-dom';
import './index.css';
import { useSelector } from 'react-redux';
import { categorySlice } from '../../store/reducers/categoryReducer/categorySlice';
import { useCallback } from 'react';

export const Layout = ({ dispatch, catCategory, page, isStarted }) => {
  const { selectedCategoryId } = useSelector(state => state.categoryReducer);
  const { setSelectedCategoryId } = categorySlice.actions;

  const handleSelectCategory = useCallback((id) => {
    dispatch(setSelectedCategoryId(id));
  }, []);

  const handleClearCategoryId = useCallback(() => {
    dispatch(setSelectedCategoryId(null));
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="container">
            <div className="header__block">
              <NavLink to="/" className="header__home" onClick={handleClearCategoryId}>HOME</NavLink>
              <div className="header__nav">
                <nav className="header__menu">
                  <ul className="header__list">
                    {
                      catCategory.length ? (
                        catCategory.map((category) => (
                          <li key={category.id} onClick={() => handleSelectCategory(category.id)}>
                            <Link
                              to={`images/search?limit=10&page=${page}&category_ids=${category.id}`}
                              className={`header__link ${category.id === selectedCategoryId ? 'active__link' : ''}`}
                            >
                              {category.name.toUpperCase()}
                            </Link>
                          </li>
                        ))
                      ) : (
                        isStarted ? (
                          <div className="header__link">
                            CATEGORY LOADED PLEASE WAIT
                          </div>
                        ) : (
                          <></>
                        )
                      )
                    }
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet/>
    </>
  );
};
