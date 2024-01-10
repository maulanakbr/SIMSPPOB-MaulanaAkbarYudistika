import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {AxiosError} from 'axios';

import {instance, removeStorage, setStorage} from '@/lib';
import {
  login as loginService,
  profile as profileService,
  profileUpdateImage as profileUpdateImageService,
  profileUpdate as profileUpdateService,
  register as registerService,
} from '@/services';
import type {
  BaseSliceState,
  LoginPayload,
  ProfileData,
  ProfileUpdateImagePayload,
  ProfileUpdatePayload,
  RegisterPayload,
} from '@/types';

export type MembershipState = {
  profile: ProfileData | null;
  token: string;
} & BaseSliceState;

const initialState: MembershipState = {
  profile: null,
  token: '',
  isError: '',
  isLoading: false,
  isSuccess: false,
};

export const login = createAsyncThunk('membership/login', async (payload: LoginPayload) => {
  try {
    const {data} = await loginService(payload);
    const token = data.data?.token;

    await setStorage({key: 'token', value: token as string});

    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    return token;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
});

export const register = createAsyncThunk(
  'membership/register',
  async (payload: Omit<RegisterPayload, 'confirmPassword'>) => {
    try {
      const {data} = await registerService(payload);
      return data.message;
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.message);
    }
  },
);

export const profile = createAsyncThunk('membership/profile', async () => {
  try {
    const {data} = await profileService();
    return data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
});

export const profileUpdate = createAsyncThunk(
  'membership/profile/update',
  async (payload: ProfileUpdatePayload) => {
    try {
      const {data} = await profileUpdateService(payload);
      return data;
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.message);
    }
  },
);

export const profileUpdateImage = createAsyncThunk(
  'membership/profile/image',
  async (payload: ProfileUpdateImagePayload) => {
    try {
      const {data} = await profileUpdateImageService(payload);
      return data;
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.message);
    }
  },
);

const membershipSlice = createSlice({
  name: 'membership',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    signOut(state) {
      state.token = '';
      removeStorage({key: 'token'});
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload || '';
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message || '';
      })
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, state => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message || '';
      })
      .addCase(profile.pending, state => {
        state.isLoading = true;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload.data;
      })
      .addCase(profile.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message || '';
      })
      .addCase(profileUpdate.pending, state => {
        state.isLoading = true;
      })
      .addCase(profileUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload.data;
      })
      .addCase(profileUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message || '';
      })
      .addCase(profileUpdateImage.pending, state => {
        state.isLoading = true;
      })
      .addCase(profileUpdateImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload.data;
      })
      .addCase(profileUpdateImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message || '';
      });
  },
});

export const {setToken, signOut} = membershipSlice.actions;
export const membershipReducer = membershipSlice.reducer;
