import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from 'src/shared/store/types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
