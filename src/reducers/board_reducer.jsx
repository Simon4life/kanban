const board_reducer = (state, action) => {

  if (action.type === "GET_BOARDS") {
    return {
      ...state,
      boards: action.payload.boards,
      boardIndex: 0,
      isBoardLoading: false,
      isTaskLoading: false,
    };
  }

  if (action.type === "ADD_NEW_BOARD") {
    return {
      ...state,
      boards: [...state.boards, action.payload],
      boardIndex: state.boardIndex++,
    };
  }

  if (action.type === "UPDATE_BOARD_INDEX") {
    return { ...state, boardIndex: action.payload };
  }

  if (action.type === "OPEN_CREATING_MODAL") {
    return { ...state, isCreating: true, isModalOpen: true };
  }

  if (action.type === "CLOSE_CREATING_MODAL") {
    return { ...state, isCreating: false, isModalOpen: false };
  }

  if (action.type === "OPEN_EDITING_MODAL") {
    return { ...state, isCreating: true, isModalOpen: true };
  }
  if (action.type === "CLOSE_EDIT_MODAL") {
    return { ...state, isEditing: false, isModalOpen: false, editVal: {} };
  }

  if (action.type === "UPDATE_EDIT_VAL") {
    const { boards, boardIndex } = state;
    const { tasks } = boards[boardIndex];

    const task = tasks.find((item) => {
      return item._id === action.payload;
    });
    return {
      ...state,
      editVal: task,
      isEditing: true,
      isModalOpen: true,
    };
  }

  if (action.type === "UPDATE_TASK_ARR") {
    const {boardID, taskArr} = action.payload;
    const board = state.boards.find((item) => item._id === boardID);
    if (board) {
      const newBoardsArr = state.boards.map((item) => {
        if (item._id === boardID) {
          return { ...item, tasks: taskArr };
        } else {
          return item;
        }
      });

      return { 
        ...state,
        boards: newBoardsArr,
        isModalOpen: false,
        isEditing: false,
      };
    }
    return { ...state };
  }
  
  if (action.type === "TOGGLE_LOADING") {
    return { ...state, isTaskEditingLoading: !state.isTaskEditingLoading };
  }
  if (action.type === "GET_ALL_TASK") {
    const { taskArr, boardID } = action.payload;
    const newBoardArr = state.boards.map((board) => {
      if (board._id === boardID) {
        return { ...board, tasks: taskArr };
      } else {
        return board;
      }
    });

    return {
      ...state,
      boards: newBoardArr,
      isTaskEditingLoading: false,
      isModalOpen: false,
      isEditing: false,
    };
  }

  if(action.type === "REMOVE_TASK") {
    const {taskId, boardId} = action.payload;

    const taskArr = state.boards[state.boardIndex].tasks.filter(task => {
      return task._id !== taskId;
    });

    const boardArr = state.boards.map(board => {
      if(board._id === boardId) {
        return {...board, tasks: taskArr}
      } else {
        return board;
      }
    })

    return {...state, boards: boardArr, isEditing: false}

  }
  return state;
};

export default board_reducer;
