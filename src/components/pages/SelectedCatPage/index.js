import { useParams } from 'react-router-dom';

export const SelectedCatPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      SelectedCatPage
    </div>
  )
}
