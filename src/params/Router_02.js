/* 라우터 형식 2 */
import React from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Layout from "./Layout";
import Main from "./Main";
import Params from "./Params";
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
            <Route path="/params" element={<Params />}></Route>
            <Route path="/content" element={<Content />}></Route>
            <Route path="/profiles/:username" element={<Profile />} />
            {/* :id를 중첩으로 표현하지 않음 */}
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<Article />} />
            <Route
              path="*"
              element={/* 존재하지 않는 페이지 연결시 */ <NotFound />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}