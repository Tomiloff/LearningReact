import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";


const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Привет, как ты?", likesCount: 18},
        {id: 2, message: "Да всё хорошо", likesCount: 20}
      ],
      newPostText: "",
    },
    dialogsPages: {
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
      ],
      newMessageText: "",
    },
    sideBar: {
        friends: [
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
        ]
    }
  },
  _callSubscriber() {
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPages = dialogsReducer(this._state.dialogsPages, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  }
};


export default store;
