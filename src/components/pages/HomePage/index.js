import { useCallback, useEffect } from 'react';
import './index.css';

export const HomePage = ({ isStarted, setIsStarted }) => {

  useEffect(() => {
    return () => setIsStarted(false)
  }, [])
  const handleLoadedCategory = useCallback(() => {
    setIsStarted(true);
  }, []);

  return !isStarted && (
    <div className="home__container">
      <button className="loaded__category" onClick={handleLoadedCategory}>LOADED CATS CATEGORY</button>
    </div>
  );
};
