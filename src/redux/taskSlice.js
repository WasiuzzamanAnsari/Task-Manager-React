import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  return res.data;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    updateTask: (state, action) => {
      const index = state.list.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) state.list[index] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        if (state.list.length === 0) {
          state.list = action.payload;
        }
      });
  },
});

export const { addTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
