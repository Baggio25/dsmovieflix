import { useForm } from 'react-hook-form';

import { requestBackendLogin } from '../../../../util/requests';
import ButtonPrimary from '../../../../components/ButtonPrimary';
import './styles.css';
import { useState } from 'react';

type FormData = {
	username: string;
	password: string;
};

const Login = () => {
	const [hasError, setHasError] = useState(false);
	const { register, handleSubmit } = useForm<FormData>();
	const onSubmit = (formData: FormData) => {
		requestBackendLogin(formData)
			.then((response) => {
				setHasError(false);
				console.log('SUCESSO ', response);
			})
			.catch((error) => {
				setHasError(true);
				console.log('ERRO ', error);
			});
	};

	return (
		<div className="login-card base-card">
			<h1 className="login-card-title">Login</h1>

			{hasError && (
				<div className="alert alert-danger">
					Usuário ou senha inválidos
				</div>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-4">
					<input
						{...register('username')}
						type="text"
						className={`form-control base-input `}
						placeholder="Email"
						name="username"
						autoFocus
					/>
				</div>
				<div className="mb-4">
					<input
						{...register('password')}
						type="password"
						className={`form-control base-input `}
						placeholder="Senha"
						name="password"
					/>
				</div>

				<div className="login-card-submit">
					<ButtonPrimary text="Fazer login" />
				</div>
			</form>
		</div>
	);
};

export default Login;
