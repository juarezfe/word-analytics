import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText }) {
  const [warningMessage, setWarningMessage] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarningMessage("No scripts allowed");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningMessage("No @ symbol allowed");
      newText = newText.replace("@", "");
    } else setWarningMessage("");

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
      {warningMessage && <Warning message={warningMessage} />}
    </div>
  );
}
