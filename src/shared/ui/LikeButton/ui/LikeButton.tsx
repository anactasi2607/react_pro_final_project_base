import s from './LikeButton.module.css';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import { startTransition, useOptimistic, useState } from 'react';
import { LikeIcon } from 'src/shared/ui/icons/Like/ui/LikeIcon';
import {
	SetLikeResponse,
	DeleteLikeResponse,
} from 'src/app/store/api/productsApi';

type TLikeButtonProps = {
	product: Product;
	accessToken: string;
	user: Partial<User> | null;
	setLike: (arg: {
		id: string;
	}) => Promise<{ data?: SetLikeResponse; error?: any }>;
	deleteLike: (arg: {
		id: string;
	}) => Promise<{ data?: DeleteLikeResponse; error?: any }>;
};

export const LikeButton = ({
	product,
	accessToken,
	user,
	setLike,
	deleteLike,
}: TLikeButtonProps) => {
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
			<LikeIcon />
		</button>
	);
};
