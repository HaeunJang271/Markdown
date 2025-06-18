import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import MarkdownHelp from "./components/MarkdownHelp";

function App() {
  const [markdown, setMarkdown] = useState(() => {
    return localStorage.getItem("markdown") || `# 마크다운 노트\n\n- 왼쪽에 입력\n- 오른쪽에서 확인`;
  });

  const [darkMode, setDarkMode] = useState(false);

  const [fontFamily, setFontFamily] = useState(() => {
    return localStorage.getItem("font") || "monospace";
  });

  useEffect(() => {
    localStorage.setItem("markdown", markdown);
  }, [markdown]);

  useEffect(() => {
    localStorage.setItem("font", fontFamily);
  }, [fontFamily]);

  const downloadMarkdown = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "note.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <div className="buttons">
        <button onClick={() => setDarkMode(!darkMode)} className="toggle-button">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <button onClick={downloadMarkdown} className="download-button">
          📥 Markdown 저장
        </button>
        <select
          className="font-selector"
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          <option value="monospace">Monospace</option>
          <option value="sans-serif">Sans-serif</option>
          <option value="serif">Serif</option>
        </select>
      </div>

      <div className="card">
        <Editor
          markdown={markdown}
          setMarkdown={setMarkdown}
          style={{ fontFamily }}
        />
        <Preview markdown={markdown} style={{ fontFamily }} />
        <MarkdownHelp />
      </div>
    </div>
  );
}

export default App;
