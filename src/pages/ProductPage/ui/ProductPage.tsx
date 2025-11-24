import { ButtonBack } from 'src/shared/ui/ButtonBack';
import { WithProtection } from 'src/app/store/HOCs/WithProtection';
import { Product } from 'src/widgets/Product/ui/Product';

export const ProductPage = WithProtection(() => {
	return (
		<div className='pageContainer'>
			<ButtonBack />
			<Product />
		</div>
	);
});
