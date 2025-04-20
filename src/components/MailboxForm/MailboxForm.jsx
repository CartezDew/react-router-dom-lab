// src/components/MailboxForm/MailboxForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MailboxForm({ addBox }) {
  const [boxOwner, setBoxOwner] = useState("");
  const [boxSize, setBoxSize] = useState("Small");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!boxOwner) return; // prevent empty submissions

    addBox({ boxOwner, boxSize }); // ✅ Pass values to App.jsx
    navigate("/mailboxes"); // ✅ Redirect after submit
  };

  return (
    <div>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a Boxholder:
          <input
            type="text"
            placeholder="Boxholder name"
            value={boxOwner}
            onChange={(e) => setBoxOwner(e.target.value)}
          />
        </label>

        <label>
          Select a Box Size:
          <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
