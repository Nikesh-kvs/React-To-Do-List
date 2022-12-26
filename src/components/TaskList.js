import React from "react";
import TaskCard from "./TaskCard";

const TaskList = (props) => {
  console.log(props);

  const deletetaskHandler = (id) => {
    props.getContactId(id);
  };
  const renderTaskList = props.contacts.map((contact) => {
    return (
      <TaskCard
        contact={contact}
        clickHander={deletetaskHandler}
        key={contact.id}
      />
    );
  });
  return <div className="ui celled list">{renderTaskList}</div>;
};

export default TaskList;
