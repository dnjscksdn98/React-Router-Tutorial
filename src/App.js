import React from "react";
// Route: 특정 주소에 특정 컴포넌트를 보여준다
// Link: 특정 링크를 눌렀을때, 다른 경로로 가고 싶을때 - 페이지 로딩 없이
// navigate the user, and the URL will change, without the page reloading
// Setting the path to just “/” — it effectively wraps, or shows up on every page.
// This is particularly helpful for things like a navigation bar, a footer, a sign in/out toggle button .
// So, at any point that the path has “/” in it — it is a match and the component will render.
import { Route, Link, Switch, NavLink } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";

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
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        {/* Switch : 마지막까지 경로 탐색 후에, 해당 경로가 없다면 마지막 Route 를 사용한다 */}
        {/* 주로 404 페이지를 만들때 사용 */}
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
