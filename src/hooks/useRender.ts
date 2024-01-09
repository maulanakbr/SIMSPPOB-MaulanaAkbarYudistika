import * as React from 'react';

import type {AsyncThunkAction, UnknownAction} from '@reduxjs/toolkit';
import type {AsyncThunkConfig} from '@reduxjs/toolkit/dist/createAsyncThunk';

import {useAppDispatch} from './useRedux';

type UseRenderParams<T> = {
  callback: AsyncThunkAction<T, void, AsyncThunkConfig> | UnknownAction;
};

export default function useRender<T>({callback}: UseRenderParams<T>) {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (callback) {
      return () => {};
    }

    dispatch(callback);
  }, []);

  return;
}
