import { useLocation } from 'react-router-dom';
import { ButtonBack } from '../../../shared/ui/ButtonBack';
import { ReviewList } from '../../ReviewList/ui/ReviewList';
import { WithProtection } from '../../../shared/store/HOCs/WithProtection';
import { useGetProductQuery } from '../../../shared/store/api/productsApi';
import { ProductDetail } from '../../../features/ProductDetail/ui/Product';

export const Product = WithProtection(() => {
	const location = useLocation();
	const { pathname } = location;
	const productId = pathname.split('/').at(-1) || '';

	const { data: product } = useGetProductQuery({ id: productId });

	if (!product) {
		return <></>;
	}

	return (
		<>
			<ButtonBack />
			<ProductDetail product={product} />
			<ReviewList product={product} />
		</>
	);
});
