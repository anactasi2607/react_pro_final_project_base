import { WithProtection } from 'src/app/store/HOCs/WithProtection';
import { SignInForm } from 'src/widgets/SignInForm';

export const SignInPage = WithProtection(() => {
	return <SignInForm />;
});
