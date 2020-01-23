import React from "react";
// Route: 특정 주소에 특정 컴포넌트를 보여준다
// Link: 특정 링크를 눌렀을때, 다른 경로로 가고 싶을때 - 페이지 로딩 없이
import { Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";

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
    </div>
  );
}

export default App;
