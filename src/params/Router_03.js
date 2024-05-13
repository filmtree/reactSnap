/* 라우터 형식  3 */
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Layout from './Layout';
import Main from './Main';
import Params from './Params';
import Content from './Content';
import NotFound from './NotFound';
import Profile from './Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';

export default function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Main /> },
        { path: 'params', element: <Params /> },
        { path: 'content', element: <Content /> },
        { path: 'profiles/:username', element: <Profile /> },
        { path: 'articles', element: <Articles /> },
        { path: 'articles/:id', element: <Article /> },
        { path: '*', element: <NotFound /> }
        /* useRoutes 훅에서는 Redirect가 불가능 -- v6버전 */
        /* 해당 컴포넌트(NotFoundRedirect.js)에서 조건부 Redirect해야함 */
      ]
    }
  ]);

  return (
    <div className="App">
      <BrowserRouter>{element}</BrowserRouter>
    </div>
  );
}
