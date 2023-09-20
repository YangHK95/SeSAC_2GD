import HeaderMenu from "../components/HeaderMenu";
import { Link } from "react-router-dom";
export default function Practice() {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <h1>Practice page</h1>
      <ul>
        <li>
          <Link to="matzip">맛집 모음</Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
}
