import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const code = `import React from "react"; 
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; 
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <App />
</React.StrictMode>
`;

const Test = () => {
  return (
    <SyntaxHighlighter language="jsx" style={dracula}>
      {code}
    </SyntaxHighlighter>
  );
};

export default Test;
