export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  /*   const tasks = [
    { id: 10001, name: 'TASK A', time: '2:09:01 AM 9/14/2030' },
    { id: 10001, name: 'TASK B', time: '2:09:01 AM 9/14/2030' },
    { id: 10001, name: 'TASK C', time: '2:09:01 AM 9/14/2030' },
    { id: 10001, name: 'TASK D', time: '2:09:01 AM 9/14/2030' }
  ]; */

  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  };

  const handleUpdate = (id) => {
    const selectedTask = taskList.find((task) => task.id === id);
    setTask(selectedTask);
  };

  return (
    <section className="shwoTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>
      <ul>
        {taskList.map((task) => {
          return (
            <li key={task.id}>
              <p>
                <span className="name">{task.name}</span>
                <span className="time">
                  <small>{task.time}</small>
                </span>
              </p>
              <div className="tools">
                <i
                  onClick={() => handleUpdate(task.id)}
                  className="bi bi-pencil-square"
                  style={{ color: '#3B71CA' }}
                ></i>
                <i
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                  className="bi bi-trash"
                  style={{ color: 'crimson' }}
                ></i>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
