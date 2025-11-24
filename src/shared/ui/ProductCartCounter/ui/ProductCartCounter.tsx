import s from './ProductCartCounter.module.css';
import classNames from 'classnames';
import { useCount } from 'src/shared/ui/ProductCartCounter/hooks/useCount';
import { useAddToCart } from 'src/shared/hooks/useAddToCart';
import { Button } from 'src/shared/ui/Button/ui/Button';

type ProductCartCounterProps = {
	product: Product;
};
export const ProductCartCounter = ({ product }: ProductCartCounterProps) => {
	const { count, handleCount, handleCountMinus, handleCountPlus } = useCount();
	const { addProductToCart } = useAddToCart();

	return (
		<div className={classNames('product__btn-wrap')}>
			<div className={s['button-count']}>
				<button className={s['button-count__minus']} onClick={handleCountMinus}>
					-
				</button>
				<input
					type='number'
					className={s['button-count__num']}
					value={count}
					onChange={handleCount}
				/>
				<button className={s['button-count__plus']} onClick={handleCountPlus}>
					+
				</button>
			</div>
			<Button
				variant='primary'
				size='small'
				onClick={() => addProductToCart({ ...product, count })}>
				В корзину
			</Button>
		</div>
	);
};
