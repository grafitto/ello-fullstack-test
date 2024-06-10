import Books from './views/Books';
import ReadingList from './views/ReadingList';

const routes = [
  {
    path: '/',
    element: <Books />,
  },
  {
    path: '/reading-list',
    element: <ReadingList />,
  },
];

export { routes };
