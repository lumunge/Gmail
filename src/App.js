import EmailContent from "./components/EmailContent";
import Sidebar from "./components/LeftSidebar";
import EmailHeader from "./components/EmailHeader";
import { useState } from "react";
import EmailBar from "./components/EmailBar";

import "./App.css";

function App() {
  const [isOpen, setIsopen] = useState(false);

  const [emailView, setEmailView] = useState("inbox");

  const [emailContent, setEmailContent] = useState("");

  const [allCheck, setAllCheck] = useState(false);

  const [emails, setEmails] = useState([
    {
      id: 1,
      title: "Email 1 Title",
      body: "Email one body",
      isRead: false,
      isSelected: false,
      isArchived: false,
    },
    {
      id: 2,
      title: "Email 2 Title",
      body: "Email two body",
      isRead: false,
      isSelected: false,
      isArchived: false,
    },
    {
      id: 3,
      title: "Email 3 Title",
      body: "Email three body",
      isRead: false,
      isSelected: false,
      isArchived: false,
    },
    {
      id: 4,
      title: "Email 4 Title",
      body: "Email four body",
      isRead: false,
      isSelected: false,
      isArchived: false,
    },
  ]);

  const [counter, setCounter] = useState([]);

  const toggleSidebar = (emailContent) => {
    isOpen === true ? setIsopen(false) : setIsopen(true);

    setEmailContent(emailContent);

    console.log("toggling sidebar");
  };

  const changeView = (view) => {
    setEmailView(view);
  };

  const isEmailSelected = (_id) => {
    return counter.includes(_id);
  };

  const readAllSelectedEmails = () => {
    const updatedEmails = emails.map((email) => {
      if (isEmailSelected(email.id)) {
        return {
          ...email,
          isRead: true,
        };
      }
      return email;
    });
    setEmails(updatedEmails);
    setCounter([]);
  };

  const selectAll = () => {
    if (!allCheck) {
      const updatedEmails = emails.map((email) => {
        return {
          ...email,
          isSelected: true,
        };
      });
      setAllCheck(!allCheck);
      setEmails(updatedEmails);
    } else {
      const updatedEmails = emails.map((email) => {
        return {
          ...email,
          isSelected: false,
        };
      });
      setAllCheck(!allCheck);
      setEmails(updatedEmails);
    }
  };

  const readEmail = (_id) => {
    console.log(_id);
    const updatedEmails = emails.map((email) => {
      if (email.id === _id) {
        return {
          ...email,
          isRead: true,
        };
      }
      return email;
    });
    setEmails(updatedEmails);
  };

  const unselectedCount = emails.reduce((count, email) => {
    if (email.isSelected) {
      return count + 1;
    }
    return count;
  }, 0);

  const readCount = emails.reduce((count, email) => {
    if (email.isRead) {
      return count + 1;
    }
    return count;
  }, 0);

  const selectOne = (_id) => {
    console.log(_id);
    setCounter((prevIds) => [...prevIds, _id]);

    // const updatedEmails = emails.map((email) => {
    //   if (email.id === _id && !email.isSelected) {
    //     return {
    //       ...email,
    //       isSelected: true,
    //     };
    //   } else if (email.id === _id && email.isSelected) {
    //     return {
    //       ...email,
    //       isSelected: false,
    //     };
    //   }
    //   return email;
    // });
    // setEmails(updatedEmails);
  };
  return (
    <div className="app">
      <div className="side-bar">
        <Sidebar
          changeView={changeView}
          emailsCount={emails.length}
          readCount={readCount}
        />
      </div>
      <div className="main-bar">
        <EmailHeader emailView={emailView} />
        <EmailContent
          toggleSidebar={toggleSidebar}
          emailView={emailView}
          unselectedCount={unselectedCount}
          selectAll={selectAll}
          emails={emails}
          allCheck={allCheck}
          readAllSelectedEmails={readAllSelectedEmails}
          selectOne={selectOne}
          readEmail={readEmail}
          counter={counter}
        />
        <EmailBar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          emailContent={emailContent}
        />
      </div>
    </div>
  );
}

export default App;
