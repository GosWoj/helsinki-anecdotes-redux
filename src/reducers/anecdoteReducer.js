import anecdoteService from "../services/anecdoteService";

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE":
      const id = action.data.id;
      const newAnecdote = action.data.anecdote;

      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : newAnecdote
      );
    case "ADD_ANECDOTE":
      return [...state, action.data];
    case "INIT_ANECDOTES":
      return action.data;
    default:
      return state;
  }
};

export const addVote = (id, anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.addVote(id, anecdote);
    dispatch({
      type: "VOTE",
      data: { id, anecdote: newAnecdote },
    });
  };
};

export const addAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createAnecdote(anecdote);
    dispatch({
      type: "ADD_ANECDOTE",
      data: newAnecdote,
    });
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
