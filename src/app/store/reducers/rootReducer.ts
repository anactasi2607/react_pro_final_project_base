import { combineReducers } from 'redux';
import { userSlice } from 'src/app/store/slices/user';
import { cartSlice } from 'src/app/store/slices/cart';
import { productsSlice } from 'src/app/store/slices/products';
import { authApi } from 'src/app/store/api/authApi';
import { productsApi } from 'src/app/store/api/productsApi';

export const rootReducer = combineReducers({
	[userSlice.name]: userSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[productsSlice.name]: productsSlice.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[productsApi.reducerPath]: productsApi.reducer,
});
