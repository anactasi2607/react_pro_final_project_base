import { FC, useEffect, useRef } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Link, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpFormValues } from 'src/features/SignUp/model/types';
import { signUpFormSchema } from 'src/features/SignUp/model/validator';
import { userActions } from 'src/app/store/slices/user';
import { getMessageFromError } from 'src/shared/utils';
import { useSignUpMutation } from 'src/app/store/api/authApi';

export const SignUp: FC = () => {
	const dispatch = useDispatch();
	// navigate поможет сделать редирект в нужный момент
	const navigate = useNavigate();
	// Из хука useSignUpMutation (был получен путем автогенерации)
	// достаем функцию, которая будет (регистрировать пользователя) делать POST-запрос к нашем серверу)
	const [signUpRequestFn] = useSignUpMutation();
	const emailInputRef = useRef<HTMLInputElement>(null);
	// инициализируем react-hook-form
	const {
		// control понадобиться, чтобы подружить react-hook-form и компоненты из MUI
		control,
		handleSubmit,
		formState: { errors, isValid, isSubmitting, isSubmitted },
		// с помощью generic подсказываем react-hook-form, какие поля содержит наша форма
	} = useForm<SignUpFormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
		// react-hook-form умеет работать со многими библиотеками
		// валидации, мы используем yup
		resolver: yupResolver(signUpFormSchema),
	});

	const submitHandler: SubmitHandler<SignUpFormValues> = async (values) => {
		try {
			// метод "unwrap" помогает убрать вспомогательные обертки
			// RTK, которые обрабатывают ошибки. Теперь ошибки обрабатываем мы
			// с помощью конструкции try...catch. В этом случае нам так удобней
			const response = await signUpRequestFn(values).unwrap();

			dispatch(userActions.setUser(response.user));
			dispatch(
				userActions.setAccessToken({ accessToken: response.accessToken })
			);

			// Выводим уведомление, что пользователь успешно зарегался
			// Есть куча библиотек для отображения "Тостеров". Мы используем
			// react-toastify — https://github.com/fkhadra/react-toastify#readme
			toast.success('Вы успешно зарегистрированы!');
			navigate('/');
		} catch (error) {
			// Если произошла ошибка, то выводим уведомление
			console.log({ error });
			toast.error(
				getMessageFromError(
					error,
					'Не известная ошибка при регистрации пользователя'
				)
			);
		}
	};

	useEffect(() => {
		if (emailInputRef.current) {
			emailInputRef.current.focus();
		}
	}, []);

	return (
		<Box
			component='form'
			onSubmit={handleSubmit(submitHandler)}
			noValidate
			sx={{ mt: 1 }}>
			{/* Чтобы подружить react-hook-form с MUI используем компонент Controller
              смотри доку https://react-hook-form.com/get-started#IntegratingwithUIlibraries
           */}
			<Controller
				name='email'
				control={control}
				render={({ field }) => (
					<TextField
						margin='normal'
						label='Email Address'
						type='email'
						fullWidth
						required
						autoComplete='email'
						inputRef={emailInputRef}
						error={!!errors.email?.message}
						helperText={errors.email?.message}
						{...field}
					/>
				)}
			/>
			<Controller
				name='password'
				control={control}
				render={({ field }) => (
					<TextField
						label='Password'
						type='password'
						error={!!errors.password?.message}
						helperText={errors.password?.message}
						margin='normal'
						fullWidth
						required
						{...field}
					/>
				)}
			/>

			<LoadingButton
				type='submit'
				// кнопка становится недоступной после первой валидации (если есть ошибки)
				// или когда выполняется отправка (чтобы не дать пользователю отправить форму несколько раз)
				disabled={isSubmitted && (!isValid || isSubmitting)}
				loading={isSubmitting}
				fullWidth
				variant='contained'
				sx={{ mt: 3, mb: 2 }}>
				Sign Up
			</LoadingButton>
			<Box display='flex' justifyContent='center' flexGrow={1}>
				<Link component={RouterLink} to='/signin'>
					SIGN IN
				</Link>
			</Box>
		</Box>
	);
};
