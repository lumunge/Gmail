import "../styles/left-sidebar.css";

const Sidebar = ({ changeView, readCount, emailsCount }) => {
  return (
    <>
      <div className="left__sidebar">
        <button className="btn" onClick={() => changeView("inbox")}>
          Inbox({emailsCount - readCount})
        </button>
        <button className="btn" onClick={() => changeView("archive")}>
          Archive(0)
        </button>
        <button className="logout__btn">Logout</button>
      </div>
    </>
  );
};

export default Sidebar;
