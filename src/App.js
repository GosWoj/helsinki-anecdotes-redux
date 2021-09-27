import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import { initAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeAnecdotes = async () => {
      dispatch(initAnecdotes());
    };
    initializeAnecdotes();
  }, [dispatch]);

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <h2>Add new anecdote</h2>
      <AnecdoteForm />
    </div>
  );
};

export default App;
