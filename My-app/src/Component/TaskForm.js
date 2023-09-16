import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';


const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the inputs
    if (taskName && taskDescription && completionDate) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <Navigate to={{
      pathname: '/submitted',
      state: {
        taskName,
        taskDescription,
        completionDate,
      }
    }} />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Name:</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Task Description:</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Expected Completion Date:</label>
          <input
            type="date"
            value={completionDate}
            onChange={(e) => setCompletionDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
