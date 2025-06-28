import { Link, href } from 'react-router-dom';
import { ROUTES } from '@/shared/model/routes';

export const BoardsListPage = () => {
  return (
    <>
      <div>Boards List </div>
      <Link to={href(ROUTES.BOARD, { boardId: '1' })}>Board 1</Link>
    </>
  );
};

export const Component = BoardsListPage;
