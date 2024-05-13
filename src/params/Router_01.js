/* 라우터 형식 1 */

import React from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Layout from "./Layout";
import Main from "./Main";
import Content from "./Content";
import NotFound from "./NotFound";
import Profile from "./Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />}></Route>
            <Route path="/content" element={<Content />}></Route>
            <Route path="/profiles/:username" element={<Profile />} />
            {
              /* 중첩 라우팅 - id만 작성한 child*/
              <Route path="/articles" element={<Articles />}>
                <Route path=":id" element={<Article />} />
              </Route>
            }
          </Route>
          <Route
            path="*"
            element={/* 존재하지 않는 페이지 연결시 */ <NotFound />}
          ></Route>
          {/* 404 리다이렉트 redirect 처리 - Home으로 */}
          <Route
            path="/*"
            element={<Navigate replace={true} to="/content" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
