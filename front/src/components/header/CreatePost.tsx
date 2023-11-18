import "./styles/createPost.css";

function CreatePost() {
  return (
    <button className="nav__post">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <circle
          cx="10"
          cy="10"
          r="8.5"
          fill="#FF8A00"
          stroke="#FFDB87"
          stroke-width="3"
        />
      </svg>
      스크럼블 만들기
    </button>
  );
}

export default CreatePost;
