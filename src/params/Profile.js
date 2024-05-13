// 내용(data)만 다른 공통 페이지
import { useParams, useNavigate } from "react-router-dom";

const data = {
  gildong: {
    name: "청길동",
    description: "고전 소설 홍길동과 관계 없음"
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공"
  }
};

const Profile = () => {
  const params = useParams();
  // params는 useParams 훅을 통해 가져온 현재 URL의 파라미터들을 담고 있는 객체입니다. 
  // 만약 URL이 /profiles/gildong라면, params 객체는 { username: 'gildong' } 형태를 갖게 됩니다.
  // data는 각 사용자의 정보를 저장하고 있는 객체입니다. 
  // 사용자 이름을 키로 하고, 해당 사용자의 정보를 값으로 갖는 형태로 저장되어 있습니다.
  // data[params.username]라는 표현은 data 객체에서 
  // params.username에 해당하는 키의 값을 가져오는 것을 의미합니다.
  // 예를 들어, URL이 /profiles/gildong라면 params.username은 'gildong'가 됩니다. 
  // 그럼 data[params.username]는 data['gildong']이 되어 'gildong'의 정보인 
  // { name: "Kim Minjun", description: "A developer who loves React" }를 가져오게 됩니다. 
  // 이 값을 profile에 저장합니다.
  const profile = data[params.username];
  const navigate = useNavigate();

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <button onClick={() => navigate("/")}>홈</button>
          <button onClick={() => navigate("/profiles/gildongee")}>길동이</button>
          <button onClick={() => navigate("/profiles/gildong")}>길동</button>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
      <button onClick={() => navigate(-1)}>뒤로</button>
    </div>
  );
};

export default Profile;
