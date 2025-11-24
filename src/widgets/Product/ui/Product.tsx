import { useLocation } from 'react-router-dom';
import { ReviewList } from 'src/widgets/ReviewList/ui/ReviewList';
import { WithProtection } from 'src/app/store/HOCs/WithProtection';
import { useGetProductQuery } from 'src/app/store/api/productsApi';
import { Detail } from 'src/entities/Product/ui/Detail/ui/Detail';

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
			<Detail product={product} />
			<ReviewList product={product} />
		</>
	);
});
