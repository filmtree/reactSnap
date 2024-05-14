// App.jsx
import React from "react-dom";
import "./styles.css";
import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./Main";
import Content from "./Content";
import NotFound from "./NotFound";

export default function App() {
  const routes = [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/content",
          element: <Content />,
          // Content페이지에 <outlet />이 있다면 children으로 해당 페이지 보이도록 지정.
          // children: [
          //   { path: "home", element: <Home /> },
          //   { path: "about", element: <About /> }
          // ]
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ];

  const element = useRoutes(routes);
  
  return (
    <div className="App">
      <div>{element}</div>
    </div>
  );
}
