import { Card } from 'src/entities/Product/ui/Card';
import { cartSelectors } from 'src/shared/store/slices/cart';
import { useAppSelector } from 'src/shared/store/utils';
import s from './CardList.module.css';

type CardListProps = {
	title: string;
	products: Product[];
};
export const CardList = ({ title, products }: CardListProps) => {
	const cartProducts = useAppSelector(cartSelectors.getCartProducts);

	if (!products.length) {
		return <h1 className='header-title'>Товар не найден</h1>;
	}

	const getIsProductInCart = (id: Product['id']) => {
		return cartProducts.some((p) => p.id === id);
	};

	return (
		<div className={s['card-list']}>
			<div className={s['card-list__header']}>
				<h2 className={s['card-list__title']}>{title}</h2>
			</div>
			<div className={s['card-list__items']}>
				{products.map((product) => (
					<Card
						key={product.id}
						product={product}
						isProductInCart={getIsProductInCart(product.id)}
					/>
				))}
			</div>
		</div>
	);
};
