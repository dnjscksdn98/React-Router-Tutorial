import React from "react";
import Profile from "./Profile";
import { Route, NavLink } from "react-router-dom";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/alex"
            activeStyle={{ background: "black", color: "white" }}
          >
            alex
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/homer"
            activeStyle={{ background: "black", color: "white" }}
          >
            homer
          </NavLink>
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
