import { WithProtection } from 'src/shared/store/HOCs/WithProtection';
import { WithQuery } from 'src/shared/store/HOCs/WithQuery';
import { useProducts } from 'src/shared/store/hooks/useProducts';
import { ButtonBack } from 'src/shared/ui/ButtonBack';
import { CardList } from 'src/widgets/CardList';

const CardListWithQuery = WithQuery(CardList);

export const FavoritesPage = WithProtection(() => {
	const { isLoading, isError, products, error } = useProducts();

	return (
		<>
			<br />
			<ButtonBack />
			<CardListWithQuery
				title='Избранные'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
		</>
	);
});
