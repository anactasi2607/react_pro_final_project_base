import { ReactNode, useEffect, useRef, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import { Button } from 'src/shared/ui/Button';

type ModalProps = {
	children: ReactNode;
	isOpen: boolean;
	confirmText?: string;
	cancelText?: string;
	onClose: () => void;
	onConfirm?: () => void;
};

export const Modal = ({
	children,
	isOpen,
	confirmText = 'Подтвердить',
	cancelText = 'Отмена',
	onClose,
	onConfirm,
}: ModalProps) => {
	const closeBtnRef = useRef<HTMLButtonElement>(null);
	const previousActiveElement = useRef<HTMLElement | null>(null);
	const modalRoot = document.getElementById('modal-root');

	const handleBackdropClick = (e: MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const handleConfirm = () => {
		onConfirm?.();
	};

	const handleCancel = () => {
		onClose();
	};

	const handleBackdropKeydown = (event: any) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	};

	useEffect(() => {
		if (isOpen) {
			previousActiveElement.current = document.activeElement as HTMLElement;
			setTimeout(() => closeBtnRef.current?.focus(), 0);
		} else if (previousActiveElement.current) {
			previousActiveElement.current.focus();
		}
	}, [isOpen]);

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isOpen) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	}, [isOpen, onClose]);

	if (!modalRoot) {
		console.error('Нет рутового элемента для модального окна');
		return null;
	}

	if (!isOpen) {
		return null;
	}

	return createPortal(
		<div
			className={s['modal_backdrop']}
			role='button'
			tabIndex={0}
			onClick={handleBackdropClick}
			onKeyDown={handleBackdropKeydown}>
			<div className={s['modal']}>
				<button
					ref={closeBtnRef}
					className={s['modal_close-btn']}
					onClick={onClose}>
					×
				</button>
				<div className={s['modal_content']}>
					{children}
					<div className={s['modal_actions']}>
						<Button variant='primary' onClick={handleConfirm}>
							{confirmText}
						</Button>
						<Button variant='secondary' onClick={handleCancel}>
							{cancelText}
						</Button>
					</div>
				</div>
			</div>
		</div>,
		modalRoot
	);
};
