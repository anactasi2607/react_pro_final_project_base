import { ButtonBack } from 'src/shared/ui/ButtonBack';
import { WithProtection } from 'src/shared/store/HOCs/WithProtection';
import { Product } from 'src/widgets/Product/ui/Product';

export const ProductPage = WithProtection(() => {
	return (
		<>
			<ButtonBack />
			<Product />
		</>
	);
});
