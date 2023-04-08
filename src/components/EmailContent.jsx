import { useState } from "react";
import "../styles/email.css";

const EmailContent = ({
  toggleSidebar,
  emailView,
  unselectedCount,
  selectAll,
  emails,
  allCheck,
  readAllSelectedEmails,
  selectOne,
  readEmail,
  counter,
}) => {
  return (
    <>
      <h4>Email Selected({counter.length})</h4>

      {/* Email header */}
      <div>
        <input
          type="checkbox"
          name=""
          value=""
          onClick={() => selectAll(emails)}
          checked={allCheck}
        />
        <button onClick={() => readAllSelectedEmails(emails)}>
          Mark as read
        </button>
        <button>Archive</button>
      </div>

      {emailView === "archive" ? (
        <>Email Archive</>
      ) : (
        <>
          {emails.map((email, index) => (
            <div
              key={index}
              className={email.isRead ? `read__email__body` : `email__body`}
            >
              <input
                type="checkbox"
                name=""
                value=""
                checked={
                  counter.includes(email.id) || email.isSelected === true
                }
                onClick={() => selectOne(email.id)}
              />
              <span
                onClick={() => {
                  toggleSidebar(email);
                  readEmail(email.id);
                }}
              >
                {email.title}
              </span>
            </div>
          ))}
        </>
      )}

      {/* email body */}
    </>
  );
};

export default EmailContent;
