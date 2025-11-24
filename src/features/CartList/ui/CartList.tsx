import { cartSelectors } from 'src/shared/store/slices/cart';
import { useAppSelector } from 'src/shared/store/utils';
import { CartItem } from 'src/features/CartItem';
import s from './CartList.module.css';
import classNames from 'classnames';

export const CartList = () => {
	const products = useAppSelector(cartSelectors.getCartProducts);

	return (
		<div className={classNames(s['cart-list'])}>
			{products.map((p) => (
				<CartItem product={p} key={p.id} />
			))}
		</div>
	);
};
