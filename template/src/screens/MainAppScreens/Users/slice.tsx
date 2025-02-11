import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {URLS} from '../../../utilities/constants';
import {showErrorMessage} from '../../../utilities/helperFunctions/miscellaneous';
import {request} from '../../../utilities/request';

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  try {
    const config = {
      url: URLS.users,
      method: 'GET',
    };

    const {data: users} = await request(config);

    return users;
  } catch (error) {
    showErrorMessage(error);
  }
});

const initialState = {
  allUsers: [],
  loading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder.addCase(getUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload;
      state.loading = false;
    });
    builder.addCase(getUsers.rejected, state => {
      state.allUsers = [];
      state.loading = false;
    });
  },
  reducers: {},
});

export const userReducer = usersSlice.reducer;
