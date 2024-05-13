import { useParams, useNavigate } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const nav = useNavigate();
  return (
    <div>
      <h2>게시글 {id}</h2>
      <button onClick={() => nav(-1)}>뒤로</button>
    </div>
  );
};

export default Article;
