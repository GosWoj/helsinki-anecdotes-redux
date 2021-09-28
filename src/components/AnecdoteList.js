import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const filtered = anecdotes.filter((a) =>
      a.content.toLowerCase().includes(filter.toLowerCase())
    );

    return filtered;
  });
  const dispatch = useDispatch();

  const vote = (id, anecdote) => {
    dispatch(addVote(id, anecdote));
    dispatch(setNotification(`You voted for ${anecdote.content}`, 10));
  };

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id, anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;
