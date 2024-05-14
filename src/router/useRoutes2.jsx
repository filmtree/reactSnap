import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

/* 중복 중첩 라우트 */
export default function Router() {
  // <Routes>
  //     <Route element={<AuthLayout/>}>
  //         <Route path="/" element={<Login/>}/>
  //         <Route path="signup" element={<SignUp />}/>
  //     </Route>
  //     <Route element={<MainLayout/>}>
  //         <Route path="home" element={<Home/>}/>
  //         <Route path="about" element={<About />}/
  //     </Route>
  // </Routes>
  let element = useRoutes([
    {
      element: <AuthLayout />, // <Outlet/> 이 있는 Link(MenuBar) Component
      children: [
        { path: "/", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
    {
      element: <MainLayout />, // <Outlet/> 이 있는 Link(MenuBar) Component
      children: [
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
      ],
    },
  ]);

  return element;
}
