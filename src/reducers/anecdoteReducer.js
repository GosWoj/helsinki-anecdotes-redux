import anecdoteService from "../services/anecdoteService";

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE":
      const id = action.data.id;
      const anecdote = state.find((anecdote) => anecdote.id === id);
      const changedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    case "ADD_ANECDOTE":
      return [...state, action.data];
    case "INIT_ANECDOTES":
      return action.data;
    default:
      return state;
  }
};

export const addVote = (id) => {
  return {
    type: "VOTE",
    data: { id },
  };
};

export const addAnecdote = (anecdote) => {
  return {
    type: "ADD_ANECDOTE",
    data: anecdote,
  };
};

export const initAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes,
    });
  };
};

export default anecdoteReducer;
