import { useLocation } from 'react-router-dom';
import { ButtonBack } from '../../../shared/ui/ButtonBack';
import { ReviewList } from '../../ReviewList/ui/ReviewList';
import { WithProtection } from '../../../shared/store/HOCs/WithProtection';
import { useGetProductQuery } from '../../../shared/store/api/productsApi';
import { Detail } from '../../../entities/Product/ui/Detail/ui/Detail';

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
			<Detail product={product} />
			<ReviewList product={product} />
		</>
	);
});
