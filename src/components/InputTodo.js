import React, { useState } from "react";
import { actions } from "../state/index";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { bindActionCreators } from "redux";

const InputTodo = (props) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const count = bindActionCreators(actions, dispatch);
  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
      setTitle("");
      count.countAdd(1);
    } else {
      alert("Please write item");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
