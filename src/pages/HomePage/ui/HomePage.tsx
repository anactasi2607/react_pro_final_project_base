import { WithProtection } from 'src/app/store/HOCs/WithProtection';
import { WithQuery } from 'src/app/store/HOCs/WithQuery';
import { LoadMore } from 'src/shared/ui/LoadMore';
import { CardList } from 'src/widgets/CardList';
import { useProducts } from 'src/app/store/hooks/useProducts';
import { Sort } from 'src/shared/ui/Sort';

const CardListWithQuery = WithQuery(CardList);

export const HomePage = WithProtection(() => {
	const { products, isLoading, isError, error } = useProducts();

	return (
		<div className='pageContainer'>
			<Sort />
			<CardListWithQuery
				title='Лакомства'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
			<LoadMore />
		</div>
	);
});
