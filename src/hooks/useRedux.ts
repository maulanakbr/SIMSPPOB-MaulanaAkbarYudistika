import {type TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import type {RootState, TypedDispatch} from '@/app/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();
