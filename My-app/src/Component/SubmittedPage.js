import React from 'react';

const SubmittedPage = (props) => {
  const { taskName, taskDescription, completionDate } = props.location.state;

  return (
    <div>
      <h2>Submitted Task</h2>
      <p><strong>Task Name:</strong> {taskName}</p>
      <p><strong>Task Description:</strong> {taskDescription}</p>
      <p><strong>Expected Completion Date:</strong> {completionDate}</p>
    </div>
  );
};

export default SubmittedPage;
