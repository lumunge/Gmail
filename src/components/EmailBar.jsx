import "../styles/email.css";

const EmailBar = ({ isOpen, toggleSidebar, emailContent }) => {
  console.log("EMAIL BODY", emailContent);
  return (
    <>
      <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
        <div>
          <div className="btn" onClick={toggleSidebar}>
            <p>X close</p>
          </div>
        </div>
        <div>
          <button>Mark as Read</button>
          <button>Archive</button>
        </div>
        <div>
          <h1>{emailContent.title}</h1>
          <p>{emailContent.body}</p>
        </div>
      </div>
      <div
        className={`sidebar__overlay ${isOpen == true ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default EmailBar;
