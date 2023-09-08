import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/profile">프로필</a>
        </li>
        <li>
          <a href="/board">게시판</a>
        </li>
      </ul>
    </nav>
  );
}
