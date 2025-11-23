import s from './LikeButton.module.css';
import { ReactComponent as LikeSvg } from './../../../assets/icons/like.svg';
import classNames from 'classnames';
import { useAppSelector } from '../../../store/utils';
import { userSelectors } from '../../../store/slices/user';
import {
	useSetLikeProductMutation,
	useDeleteLikeProductMutation,
} from '../../../store/api/productsApi';
import { toast } from 'react-toastify';
import { startTransition, useOptimistic, useState } from 'react';

type TLikeButtonProps = {
	product: Product;
};

export const LikeButton = ({ product }: TLikeButtonProps) => {
	const accessToken = useAppSelector(userSelectors.getAccessToken);
	const user = useAppSelector(userSelectors.getUser);

	const [setLike] = useSetLikeProductMutation();
	const [deleteLike] = useDeleteLikeProductMutation();

	const [isLiked, setIsLiked] = useState(
		() => product?.likes.some((l) => l.userId === user?.id) || false
	);

	const [optimisticLike, addOptimisticLike] = useOptimistic<boolean, boolean>(
		isLiked,
		(_, isLike) => isLike
	);

	const toggleLike = async () => {
		if (!accessToken) {
			toast.warning('Вы не авторизованы');

			return;
		}

		const newLikeStatus = !isLiked;

		startTransition(async () => {
			addOptimisticLike(newLikeStatus);

			let response;

			if (!isLiked) {
				response = await setLike({ id: `${product.id}` });
			} else {
				response = await deleteLike({ id: `${product.id}` });
			}

			if (response.error) {
				startTransition(() => {
					addOptimisticLike(!newLikeStatus);
					toast.error(`Товар ${product.name} не добавлен в избранное`);
				});
			} else {
				startTransition(() => {
					setIsLiked((prev) => !prev);
				});
			}
		});
	};

	return (
		<button
			className={classNames(s['card__favorite'], {
				[s['card__favorite_is-active']]: optimisticLike,
			})}
			onClick={toggleLike}>
			<LikeSvg />
		</button>
	);
};
