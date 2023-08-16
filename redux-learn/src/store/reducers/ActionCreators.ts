import axios from 'axios';
import { AppDispatch } from '../store';
import { IUser } from '../../models/IUser';
import { userSlice } from './UserSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(userSlice.actions.usersFetchingError('error 404'));
//   }
// };

export const fetchUsers = createAsyncThunk('user/fetchAll', async (_, thunkApi) => {
  try {
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось загрузить пользователей');
  }
});

//  19:25  Продвинутый Redux. Redux Toolkit, RTK query, TypeScript.
