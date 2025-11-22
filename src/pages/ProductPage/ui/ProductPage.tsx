import { ButtonBack } from '../../../shared/ui/ButtonBack';
import { WithProtection } from '../../../shared/store/HOCs/WithProtection';
import { Product } from '../../../widgets/Product/ui/Product';

export const ProductPage = WithProtection(() => {
	return (
		<>
			<ButtonBack />
			<Product />
		</>
	);
});
