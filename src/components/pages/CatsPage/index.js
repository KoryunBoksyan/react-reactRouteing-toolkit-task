import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Pagination } from '../../Pagination';
import { categorySlice } from '../../../store/reducers/categoryReducer/categorySlice';
import { fetchCatCategory } from '../../../store/reducers/catsReducer/actionsCreators';
import './index.css';
import { catSlice } from '../../../store/reducers/catsReducer/catSlice';

export const CatsPage = ({ dispatch, page, setPage }) => {
  const [catsImages, setCatsImages] = useState([]);
  const { selectedCategoryId } = useSelector(state => state.categoryReducer);
  const { setSelectedCategoryId } = categorySlice.actions;
  const { setSelectedCat } = catSlice.actions;

  useEffect(() => {
    if (selectedCategoryId) {
      dispatch(fetchCatCategory({ categoryId: selectedCategoryId, page: page }))
        .then(response => setCatsImages(response.payload));
    }
    return () => dispatch(setSelectedCategoryId(null));
  }, [selectedCategoryId, page]);

  const handleSelectCat = useCallback((id) => {
    dispatch(setSelectedCat(id));
  }, []);


  return (
    <section className="cats_images_container">
      <div className="cats_content">
        {
          catsImages.length && (
            catsImages.map((catImage) => (
              <div className="cats_card" key={catImage.id} onClick={() => handleSelectCat(catImage.id)}>
                <div className="text">
                </div>
                <div className="cats latest">
                  <div className="scale img">
                    <img src={catImage.url} alt="" className="scale"/>
                    <div className="description">
                      <h2>COOL CATS</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )
        }
      </div>
      <Pagination setPage={setPage}/>
    </section>
  );
};
