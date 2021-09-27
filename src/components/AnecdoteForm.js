import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const [anecdote, setAnecdote] = useState("");
  const dispatch = useDispatch();

  const handleAdd = async (e) => {
    e.preventDefault();
    dispatch(addAnecdote(anecdote));
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

export default AnecdoteForm;
