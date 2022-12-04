import { Link } from 'react-router-dom';
import './index.css';

export const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      This page doesn't exist. Go <Link to='/' className='link_home'>Home</Link>
    </div>
  )
}
