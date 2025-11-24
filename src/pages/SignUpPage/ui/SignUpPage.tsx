import { WithProtection } from 'src/app/store/HOCs/WithProtection';
import { SignUpForm } from 'src/widgets/SignUpForm';

export const SignUpPage = WithProtection(() => {
	return <SignUpForm />;
});
