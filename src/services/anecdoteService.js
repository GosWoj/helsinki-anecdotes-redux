import axios from "axios";

const baseURL = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseURL);

  return response.data;
};

const createAnecdote = async (anecdote) => {
  const newAnecdote = {
    content: anecdote,
    votes: 0,
  };

  const response = await axios.post(baseURL, newAnecdote);

  return response.data;
};

const addVote = async (id, anecdote) => {
  const newAnecdote = {
    ...anecdote,
    votes: ++anecdote.votes,
  };

  const response = await axios.put(`${baseURL}/${id}`, newAnecdote);

  return response.data;
};

const anecdoteService = {
  getAll,
  createAnecdote,
  addVote,
};

export default anecdoteService;
