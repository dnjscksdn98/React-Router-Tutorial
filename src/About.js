import React from "react";
import qs from "qs";

// location: 쿼리를 조회할때 사용
function About({ location }) {
  // parse: 안에 있는 값들을 추출하는 작업
  // ignoreQueryPrefix: '?' 값은 무시한다
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  const detail = query.detail === "true"; // 주의 사항: 데이터를 읽어올때는 문자열로 읽어온다

  return (
    <div>
      <h1>About</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {detail && <p>detail 값이 true 입니다.</p>}
    </div>
  );
}

export default About;
