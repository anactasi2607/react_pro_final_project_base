import s from './Cart.module.css';
import classNames from 'classnames';
import { useAppSelector } from 'src/app/store/utils';
import { cartSelectors } from 'src/app/store/slices/cart';
import { CartList } from 'src/features/CartList';
import { CartAmount } from 'src/features/CartAmount';

export const Cart = () => {
	const products = useAppSelector(cartSelectors.getCartProducts);

	if (!products.length) {
		return <h1 className='header-title'>Товаров нет корзине</h1>;
	}

	return (
		<div className={classNames(s['content'], s['container'])}>
			<div className={classNames(s['content-cart'])}>
				<div className={classNames(s['cart-title'])}>
					<span>{products.length}</span> в корзине
				</div>
				<CartList />
				<CartAmount products={products} />
			</div>
		</div>
	);
};
