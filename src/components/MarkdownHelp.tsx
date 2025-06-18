import "./MarkdownHelp.css";
const MarkdownHelp = () => {
  return (
  <div className="markdown-help">
    <h3>📘 Markdown 문법</h3>
    <ul>
      <li><code># 제목</code> → <strong>제목</strong></li>
      <li><code>**굵게**</code> → <strong>굵게</strong></li>
      <li><code>*기울임*</code> → <em>기울임</em></li>
      <li><code>- 리스트</code> → 리스트</li>
      <li><code>[링크](url)</code> → 링크</li>
      <li><code>`코드`</code> → <code>코드</code></li>
      <li><code>```코드블럭```</code> → 코드블럭</li>
      <li><code>&gt; 인용구</code> → 인용</li>
    </ul>
  </div>
);

};

export default MarkdownHelp;
