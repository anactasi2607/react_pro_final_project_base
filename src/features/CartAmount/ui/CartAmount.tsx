import { useMemo, useState } from 'react';
import { Button } from 'src/shared/ui/Button';
import { Modal } from 'src/shared/ui/Modal';
import s from './CartAmount.module.css';
import classNames from 'classnames';

type CartAmountProps = {
	products: CartProduct[];
};

export const CartAmount = ({ products }: CartAmountProps) => {
	const allPrice = useMemo(
		() => products.reduce((acc, p) => p.price * p.count + acc, 0),
		[products]
	);
	const allDiscount = useMemo(
		() => products.reduce((acc, p) => p.discount * p.count + acc, 0),
		[products]
	);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSubmitCart = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleConfirmOrder = () => {
		const order = products.map((p) => ({ id: p.id, count: p.count }));
		console.log('Отправка заказа на сервер: ', JSON.stringify(order, null, 2));
		setIsModalOpen(false);
	};

	return (
		<div className={classNames(s['cart-amount'])}>
			<h1 className={classNames(s['cart-amount__title'])}>Ваша корзина</h1>
			<div className={classNames(s['cart-amount__table'])}>
				<div className={classNames(s['cart-amount__table-row'])}>
					<span className={classNames(s['cart-amount__table-title'])}>
						{`Товары (${products.length})`}
					</span>
					<span className={classNames(s['cart-amount__table-value'])}>
						{`${allPrice} ₽`}
					</span>
				</div>
				<div className={classNames(s['cart-amount__table-row'])}>
					<span className={classNames(s['cart-amount__table-title'])}>
						Скидка
					</span>
					<span
						className={classNames(
							s['cart-amount__table-value'],
							s['cart-amount__table-value-discount']
						)}>
						{`${allDiscount} ₽`}
					</span>
				</div>
			</div>
			<div className={classNames(s['cart-amount__total-cost'])}>
				<h2 className={classNames(s['cart-amount__total-cost-title'])}>
					Общая стоимость
				</h2>
				<span className={classNames(s['cart-amount__total-cost-value'])}>
					{`${allPrice - allDiscount} ₽`}
				</span>
			</div>
			<Button variant='primary' size='small' onClick={handleSubmitCart}>
				Оформить заказ
			</Button>
			<Modal
				isOpen={isModalOpen}
				confirmText='Да, оформить'
				onClose={handleCloseModal}
				onConfirm={handleConfirmOrder}>
				<>
					<h2>Подтверждение заказа</h2>
					<p>Вы уверены, что хотите оформить заказ?</p>
				</>
			</Modal>
		</div>
	);
};
