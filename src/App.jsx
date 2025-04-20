// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";

function App() {
  // Step 1: useState
  const [mailboxes, setMailboxes] = useState([]);

  // Step 2: addBox function
  const addBox = (formData) => {
    const newBox = {
      ...formData,
      _id: mailboxes.length + 1, // Auto-generate an ID
    };
    setMailboxes([...mailboxes, newBox]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Step 3: Routes */}
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
