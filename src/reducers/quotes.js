//the big state
console.log("3");
export default (state = [], action) => {
	let index;
	let quote;
  switch (action.type) {
  	case 'ADD_QUOTE':
      console.log("8");
  		return state.concat(action.quote);
  	case 'REMOVE_QUOTE':
  	  return state.filter(quote => quote.id !== action.quoteId);
  	case 'UPVOTE_QUOTE':
  	  index = state.findIndex(quote => quote.id === action.quoteId);
  	  quote = state[index];
  	  quote.votes++;
  	  return [...state.slice(0, index), quote, ...state.slice(index+1)];
  	case 'DOWNVOTE_QUOTE':
  	  index = state.findIndex(quote => quote.id === action.quoteId);
  	  quote = state[index];
  	  if (quote.votes > 0) {
  	  	quote.votes--;
  	  };
  	  return [...state.slice(0, index), quote, ...state.slice(index+1)];
  	default:
  		return state;
  };
};