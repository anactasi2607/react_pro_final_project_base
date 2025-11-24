import { WithProtection } from 'src/shared/store/HOCs/WithProtection';
import { WithQuery } from 'src/shared/store/HOCs/WithQuery';
import { LoadMore } from 'src/shared/ui/LoadMore';
import { CardList } from 'src/widgets/CardList';
import { useProducts } from 'src/shared/store/hooks/useProducts';

const CardListWithQuery = WithQuery(CardList);

export const HomePage = WithProtection(() => {
	const { products, isLoading, isError, error } = useProducts();

	return (
		<>
			<CardListWithQuery
				title='Лакомства'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
			<LoadMore />
		</>
	);
});
