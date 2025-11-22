import { FC } from 'react';
import { Avatar, Box, Container, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { SignUp } from '../../../features/SignUp/ui/SignUp';

export const SignUpForm: FC = () => {
	return (
		<Container component='main' maxWidth='xs'>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign Up
				</Typography>
				<SignUp />
			</Box>
		</Container>
	);
};
