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
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
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
						{...register('username', {
							required: 'Campo obrigatório',
							pattern: {
								value:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Email inválido'
							}
						})}
						type="text"
						className={`form-control base-input `}
						placeholder="Email"
						name="username"
						autoFocus
					/>
					<div className="invalid-feedback d-block">
						{errors.username?.message}
					</div>
				</div>
				<div className="mb-4">
					<input
						{...register('password', {
							required: 'Campo obrigatório',
						})}
						type="password"
						className={`form-control base-input `}
						placeholder="Senha"
						name="password"
					/>
					<div className="invalid-feedback d-block">
						{errors.password?.message}
					</div>
				</div>

				<div className="login-card-submit">
					<ButtonPrimary text="Fazer login" />
				</div>
			</form>
		</div>
	);
};

export default Login;
