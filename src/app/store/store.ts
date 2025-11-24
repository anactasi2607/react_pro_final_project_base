import { configureStore } from '@reduxjs/toolkit';
import AppApi from 'src/shared/api/ApiServise';
import { rootReducer } from 'src/app/store/reducers/rootReducer';
import { authApi } from 'src/app/store/api/authApi';
import { productsApi } from 'src/app/store/api/productsApi';

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: AppApi,
			},
		}).concat([authApi.middleware, productsApi.middleware]),
});
