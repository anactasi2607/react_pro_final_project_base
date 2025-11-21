import classNames from 'classnames';
import React, { FC, InputHTMLAttributes, ChangeEvent } from 'react';

import s from './Input.module.css';

type Props = {
	label?: string;
	onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<Props> = ({ label, className, onChange, ...props }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value, e);
	};

	return (
		<div className={s['input']}>
			{label && <label className={s['input__label']}>{label}</label>}
			<input
				className={classNames([s['input__input'], className])}
				{...props}
				onChange={handleChange}
			/>
		</div>
	);
};

export default Input;
