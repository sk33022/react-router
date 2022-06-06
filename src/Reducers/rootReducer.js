

const initialState = {
    cards: [
      {id: 1, title: 'alex', body: 'hello this is alex' },
      {id: 2, title: 'bellen', body: 'hello this is bellen' },
      {id: 3, title: 'caule', body: 'hello this is caule' }

    ], 
    users: []
}

export const rootReducer = (state=initialState, action) => {
  switch(action.type){
    case 'DELETE_CARD':
      let newCard = state.cards.filter((card) => {
        return action.id !== card.id
      } )
      return{
        ...state,
        cards: newCard
      } 
      case 'FETCH_USERS':
        return {
          ...state,
          users: action.payload
        }
      default:
        return state;
  }
  // console.log(action);
  // return state;
};

