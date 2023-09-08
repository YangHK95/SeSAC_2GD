import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ContextMain() {
  const { isDark } = useContext(ThemeContext);
  return (
    <main
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>안녕하세요</p>
    </main>
  );
}
