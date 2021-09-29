import React, { useState } from "react";
import { connect } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = (props) => {
  const [anecdote, setAnecdote] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    props.addAnecdote(anecdote);
    setAnecdote("");
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        name="anecdote"
        value={anecdote}
        onChange={(e) => setAnecdote(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default connect(null, { addAnecdote })(AnecdoteForm);
