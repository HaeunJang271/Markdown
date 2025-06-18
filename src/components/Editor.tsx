import React from "react";

type Props = {
  markdown: string;
  setMarkdown: (value: string) => void;
  style?: React.CSSProperties;
};

const Editor: React.FC<Props> = ({ markdown, setMarkdown, style }) => {
  return (
    <textarea
      className="editor"
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
      placeholder="# 여기에 마크다운을 입력하세요"
      style={style} // ✅ style props 적용
    />
  );
};

export default Editor;
