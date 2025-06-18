import React from "react";
import { marked } from "marked";

type Props = {
  markdown: string;
  style?: React.CSSProperties; // ✅ style props 받을 수 있게 정의
};

const Preview: React.FC<Props> = ({ markdown, style }) => {
  console.log("📦 Preview 컴포넌트에 전달된 markdown:", markdown);

  return (
    <div
      className="preview"
      style={style} // ✅ style props 적용
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
  );
};

export default Preview;
