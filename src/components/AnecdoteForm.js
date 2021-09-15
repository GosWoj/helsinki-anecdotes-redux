import React from "react";
import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    let inputText = e.target.anecdote.value;
    const anecdote = inputText;
    inputText = "";
    dispatch(addAnecdote(anecdote));
  };

  return (
    <form onSubmit={handleAdd}>
      <input name="anecdote" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AnecdoteForm;
