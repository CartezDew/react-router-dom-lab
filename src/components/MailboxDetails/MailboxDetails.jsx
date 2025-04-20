// src/components/MailboxDetails/MailboxDetails.jsx
import { useParams } from "react-router-dom";

export default function MailboxDetails({ mailboxes }) {
  const { mailboxId } = useParams();

  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!selectedBox) return <h2>Mailbox Not Found!</h2>;

  return (
    <div>
      {/* Title */}
      <h1>Mailbox {selectedBox._id}</h1>

      {/* Subheading */}
      <h2>Details</h2>

      {/* Info */}
      <p><strong>Boxholder:</strong> {selectedBox.boxOwner}</p>
      <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
    </div>
  );
}
