import { WithProtection } from 'src/shared/store/HOCs/WithProtection';
import { SignInForm } from 'src/widgets/SignInForm';

export const SignInPage = WithProtection(() => {
	return <SignInForm />;
});
