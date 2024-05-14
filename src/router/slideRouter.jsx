// import React from "react-dom";
import { Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Header from "./Header";
import Main from "./Main";
import Content from "./Content";
import NotFound from "./NotFound";

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* https://www.npmjs.com/package/react-slide-routes */}
      <SlideRoutes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/content" element={<Content />}></Route>
        <Route path="*" element={/* 존재하지 않는 페이지 연결시 */ <NotFound />}></Route>
      </SlideRoutes>
    </div>
  );
}
