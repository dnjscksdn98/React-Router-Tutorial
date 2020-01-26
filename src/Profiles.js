import React from "react";
import Profile from "./Profile";
import { Route, Link } from "react-router-dom";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/alex">alex</Link>
        </li>
        <li>
          <Link to="/profiles/homer">homer</Link>
        </li>
      </ul>

      <Route
        path="profiles"
        exact
        render={() => <div>사용자를 선택해주세요</div>}
      />
      {/* 파라미터를 보낼때는 ':' 를 앞에 붙인다 */}
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;
