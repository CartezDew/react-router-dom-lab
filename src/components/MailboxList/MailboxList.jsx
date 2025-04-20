import { Link } from "react-router-dom";

export default function MailboxList({ mailboxes }) {
  return (
    <div>
      <h1>Mailbox List</h1>
      <div className="mailbox-grid">
        {mailboxes.map((mailbox) => (
          <Link
            key={mailbox._id}
            to={`/mailboxes/${mailbox._id}`}
            className="mail-box"
          >
            Mailbox {mailbox._id}
          </Link>
        ))}
      </div>
    </div>
  );
}
