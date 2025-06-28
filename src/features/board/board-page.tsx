import { useParams } from 'react-router-dom';
import { ROUTES, type PathParams } from '@/shared/model/routes';
const BoardPage = () => {
  const params = useParams<PathParams[typeof ROUTES.BOARD]>();
  console.log(params);
  return (
    <>
      <div>Board Page{params.boardId}</div>
    </>
  );
};

export const Component = BoardPage;
