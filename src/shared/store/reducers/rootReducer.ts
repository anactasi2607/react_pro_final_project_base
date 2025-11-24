import { combineReducers } from 'redux';
import { userSlice } from 'src/shared/store/slices/user';
import { cartSlice } from 'src/shared/store/slices/cart';
import { productsSlice } from 'src/shared/store/slices/products';
import { authApi } from 'src/shared/store/api/authApi';
import { productsApi } from 'src/shared/store/api/productsApi';

export const rootReducer = combineReducers({
	[userSlice.name]: userSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[productsSlice.name]: productsSlice.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[productsApi.reducerPath]: productsApi.reducer,
});
