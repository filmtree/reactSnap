/* 사용자 훅 */
import { useState, useEffect } from "react";

function useHideHeader() {
  const [hidden, setHidden] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  useEffect(() => {
    function handleScroll() {
      setHidden(window.scrollY > 0);
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [hidden, scrollPosition];
}

export default useHideHeader;

/* App.js */
import useScroll from "./hooks/useScroll";

const App = () => {
  const scrollPosition = useScroll();
  return (
    <div>
      <header className={"head" + (hidden ? " hidden" : "")}>
        {/* Render header content */}
        Header (position: {scrollPosition})
      </header>      
    </div>
  );
};

export default App;
