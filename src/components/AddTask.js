import React from "react";

class AddTask extends React.Component {
  state = {
    name: "",
    taskname: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.taskname === "") {
      alert("ALL the fields are mandatory!");
      return;
    }
    this.props.addTaskHandler(this.state);
    this.setState({ name: "", taskname: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Task </h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>TaskName</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Task</label>
            <input
              type="text"
              name="taskname"
              placeholder="taskname"
              value={this.state.taskname}
              onChange={(e) => this.setState({ taskname: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
