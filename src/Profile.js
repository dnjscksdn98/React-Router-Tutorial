import React from "react";

const profileData = {
  alex: {
    name: "원찬우",
    description: "Web Programmer"
  },
  homer: {
    name: "호머 심슨",
    description: "심슨 가족의 아빠"
  }
};

// match: 파라미터를 조회할때 사용
function Profile({ match }) {
  const { username } = match.params; // url에 있는 파라미터를 반환
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
