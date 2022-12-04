import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { HomePage } from './components/pages/HomePage';
import { CatsPage } from './components/pages/CatsPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { fetchCategory } from './store/reducers/categoryReducer/actionCreators';
import { Layout } from './components/Layout';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [catCategory, setCatCategory] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isStarted) {
      dispatch(fetchCategory())
        .then(response => setCatCategory(response.payload));
    }
  }, [isStarted]);

  return (
    <>
      <Routes>
        <Route path="/"
               element={
                 <Layout
                   page={page}
                   dispatch={dispatch}
                   isStarted={isStarted}
                   catCategory={catCategory}
                 />
               }
        >
          <Route index element={<HomePage isStarted={isStarted} setIsStarted={setIsStarted}/>}/>
          <Route path="/:page/:category_ids" element={<CatsPage dispatch={dispatch} page={page} setPage={setPage}/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
