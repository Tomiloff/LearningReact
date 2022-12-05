const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";


const initialState = {
  dialogs: [
    {
      id: 1, 
      name: "Dima",
      src: "https://uprostim.com/wp-content/uploads/2021/03/image044-94.jpg"
    },
    {
      id: 2, 
      name: "Андрей",
      src: "https://pbs.twimg.com/media/EEhoryYU8AAI-hI?format=jpg&name=900x900"
    },
    {
      id: 3, 
      name: "Света",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V-L3LM3amOt_N_OOkG1GLRkb5r6HnW8QoA&usqp=CAU"
    }
  ],
  messages: [
    {
      id: 1, 
      message: "Привет",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V-L3LM3amOt_N_OOkG1GLRkb5r6HnW8QoA&usqp=CAU"
    },
    {
      id: 2, 
      message: "Привет! Как дела?",
      src: "https://uprostim.com/wp-content/uploads/2021/03/image044-94.jpg"
    },
    {
      id: 3, 
      message: "Отлично всё",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V-L3LM3amOt_N_OOkG1GLRkb5r6HnW8QoA&usqp=CAU"
    }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: 
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 4, 
            message: action.newMessageBody,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V-L3LM3amOt_N_OOkG1GLRkb5r6HnW8QoA&usqp=CAU"
          }
        ]
      };
      
    default:
      return state;
  }
};


export const addMessageCreator = (newMessageBody) => ({type: ADD_NEW_MESSAGE, newMessageBody});


export default dialogsReducer;