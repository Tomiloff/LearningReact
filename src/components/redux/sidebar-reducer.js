const initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;