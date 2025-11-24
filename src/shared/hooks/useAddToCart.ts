import { cartActions } from 'src/shared/store/slices/cart';
import { useAppDispatch } from 'src/shared/store/utils';

export const useAddToCart = () => {
	const dispatch = useAppDispatch();
	const addProductToCart = (cartProduct: CartProduct) => {
		dispatch(cartActions.addCartProduct(cartProduct));
	};

	return { addProductToCart };
};
