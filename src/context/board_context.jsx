import React, { useContext, useReducer } from "react";
import {
  getUserFromLocalStorage,
} from "../utils/localStorage";
import CustomFetch from "../utils/axios"
import reducer from "../reducers/board_reducer";

const initialState = {
  isCreating: false,
  isModalOpen: false,
  isEditing: false,
  isTaskLoading: true,
  isBoardLoading: true,
  boards: [],
  boardIndex: undefined,
  isTaskEditingLoading: false,
  editVal: {},
  taskValues: [],
};

const BoardContext = React.createContext();

export const BoardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openCreatingModal = () => {
    dispatch({ type: "OPEN_CREATING_MODAL" });
  };
  const closeCreatingModal = () => {
    dispatch({ type: "CLOSE_CREATING_MODAL" });
  };

  const openEditingModal = () => {
    dispatch({ type: "OPEN_EDIT_MODAL" });
  };
  const closeEditingModal = () => {
    dispatch({ type: "CLOSE_EDIT_MODAL" });
  };

  // fetch boards
  const getBoards =  async () => {
    const user = getUserFromLocalStorage();
    if(user) {
      try {
        const res = await CustomFetch.get("/api/v1/boards");
        dispatch({ type: "GET_BOARDS", payload: res.data });
      } catch (error) {
        console.log(error);
      }
    } 
  };
  
  // create board
  const addNewBoard = async (boardVal) => {
    try {
      const res = await CustomFetch.post(
        "/api/v1/boards",
        boardVal,
      );
      console.log(res);
      dispatch({ type: "ADD_NEW_BOARD", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  // create task
  const addNewTask = async (task) => {
    const boardId = state.boards[state.boardIndex]._id;
    
    const res = await CustomFetch.post(`/api/v1/tasks/${boardId}`,
      task,
    );

    dispatch({
      type: "UPDATE_TASK_ARR",
      payload: {
        id: state.boards[state.boardIndex]._id,
        tasks: res.data.tasks.tasks,
      },
    });
  };
  const updateBoardIndex = (idx) => {
    dispatch({ type: "UPDATE_BOARD_INDEX", payload: idx });
  };

  const updateTask = async (boardId, taskId, newTask) => {
    const res = await CustomFetch.patch(`/api/v1/tasks/${boardId}/${taskId}`, newTask);
    return res.data;
  };

  const toggleLoading = () => {
    dispatch({ type: "TOGGLE_LOADING" });
  };

  // fetch all tasks
  const getAllTask = async (boardID) => {
    try {
      const resp = await CustomFetch.get(`/api/v1/tasks/${boardID}`);
      const {taskArr, boardId} = resp.data;
      dispatch({type: "GET_ALL_TASK", payload: {taskArr, boardId}})
    } catch (error) {
      console.log(error); 
    }
  };

  const updateEditVal = (id) => {
    dispatch({ type: "UPDATE_EDIT_VAL", payload: id });
  };

  return (
    <BoardContext.Provider
      value={{
        ...state,
        getBoards,
        updateBoardIndex,
        openEditingModal,
        closeEditingModal,
        openCreatingModal,
        closeCreatingModal,
        updateEditVal,
        updateTask,
        addNewBoard,
        addNewTask,
        getAllTask,
        toggleLoading,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = () => {
  return useContext(BoardContext);
};
