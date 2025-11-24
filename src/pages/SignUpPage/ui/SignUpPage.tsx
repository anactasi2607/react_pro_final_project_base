import { WithProtection } from 'src/shared/store/HOCs/WithProtection';
import { SignUpForm } from 'src/widgets/SignUpForm';

export const SignUpPage = WithProtection(() => {
	return <SignUpForm />;
});
