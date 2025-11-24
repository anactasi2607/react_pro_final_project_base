import { WithProtection } from 'src/app/store/HOCs/WithProtection';
import { WithQuery } from 'src/app/store/HOCs/WithQuery';
import { useProducts } from 'src/app/store/hooks/useProducts';
import { ButtonBack } from 'src/shared/ui/ButtonBack';
import { Sort } from 'src/shared/ui/Sort';
import { CardList } from 'src/widgets/CardList';

const CardListWithQuery = WithQuery(CardList);

export const FavoritesPage = WithProtection(() => {
	const { isLoading, isError, products, error } = useProducts();

	return (
		<div className='pageContainer'>
			<Sort />
			<ButtonBack />
			<CardListWithQuery
				title='Избранные'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
		</div>
	);
});
