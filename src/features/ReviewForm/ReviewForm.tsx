import { useState, ChangeEvent, FormEvent } from 'react';
import classNames from 'classnames';
import s from './ReviewForm.module.css';
import { Rating } from '../../shared/ui/Rating';
import { Button } from '../../shared/ui/Button';

const FORM_ID = 'form-id';

export const ReviewForm = () => {
	const [reviewText, setReviewText] = useState('');
	const [rating, setRating] = useState(0);

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setReviewText(e.target.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log('Отправка: ', { reviewText, rating });
	};

	return (
		<form className={s['form']} id={FORM_ID} onSubmit={handleSubmit}>
			<Rating isEdit rating={rating} onChange={setRating} />
			<textarea
				className={classNames(s['input'], s['textarea'])}
				name='text'
				id='text'
				placeholder='Напишите текст отзыва'
				value={reviewText}
				onChange={handleChange}></textarea>
			<Button
				className={s['form__btn']}
				type='submit'
				variant='primary'
				size='medium'
				form={FORM_ID}>
				Отправить отзыв
			</Button>
		</form>
	);
};
