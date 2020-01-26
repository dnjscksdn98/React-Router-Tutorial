import React from "react";
// Route: 특정 주소에 특정 컴포넌트를 보여준다
// Link: 특정 링크를 눌렀을때, 다른 경로로 가고 싶을때 - 페이지 로딩 없이
// navigate the user, and the URL will change, without the page reloading
// Setting the path to just “/” — it effectively wraps, or shows up on every page.
// This is particularly helpful for things like a navigation bar, a footer, a sign in/out toggle button .
// So, at any point that the path has “/” in it — it is a match and the component will render.
import { Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      {/* exact: 해당 경로가 완전히 일치할 경우에만 보여준다 */}
      <Route path="/" component={Home} exact />{" "}
      <Route path="/about" component={About} exact />
      {/* 파라미터를 보낼때는 ':' 를 앞에 붙인다 */}
      <Route path="/profiles/:username" component={Profile} />{" "}
    </div>
  );
}

export default App;
