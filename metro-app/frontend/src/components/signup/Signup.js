import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, Typography } from 'antd';
import MY_SERVICE from '../../services/index';

const { Title } = Typography;

class Signup extends Component {
	state = {
		name: '',
		email: '',
		password: ''
	};

	redirect() {
		this.props.history.push('/map');
	}

	signup = (e) => {
		e.preventDefault();
		const { name, email, password } = this.state;
		console.log('signin up');
		MY_SERVICE.signup({ email, name, password })
			.then((user) => {
				console.log(user);
			})
			.catch((err) => console.log(err));
	};

	inputChange = ({ target: { value, name } }) => {
		this.setState({
			...this.state,
			[name]: value
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div style={{ padding: '5rem 1.5rem 1.5rem 1.5rem', display: 'flex', justifyContent: 'center' }}>
				{localStorage.user ? (
					this.redirect()
				) : (
					<Form className='signup-form' style={{ width: '350px' }} onSubmit={this.signup}>
						<Form.Item>
							<Title level={2} style={{ fontFamily: 'METRO-DF' }}>
								Registrarse
							</Title>
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('name', {
								rules: [ { required: true, message: 'Porfavor, ingresa tu nombre!' } ]
							})(
								<Input
									prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder='Nombre'
									onChange={this.inputChange}
									type='text'
									name='name'
									id='name'
									required
								/>
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('email', {
								rules: [ { required: true, message: 'Porfavor, ingresa tu email!' } ]
							})(
								<Input
									prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder='Email'
									onChange={this.inputChange}
									type='text'
									name='email'
									id='email'
									required
								/>
							)}
						</Form.Item>
						<Form.Item key={1}>
							{getFieldDecorator('password', {
								rules: [ { required: true, message: 'Porfavor, ingresa tu contraseña!' } ]
							})(
								<Input
									key={1}
									prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder='Contraseña'
									onChange={this.inputChange}
									type='password'
									name='password'
									id='password'
									required
								/>
							)}
						</Form.Item>
						<Form.Item>
							<Button
								htmlType='submit'
								className='signup-form-button'
								style={{ fontFamily: 'METRO-DF', backgroundColor: '#FF8300' }}
								type='submit'
							>
								Registrarse
							</Button>
						</Form.Item>
					</Form>
				)}
			</div>
		);
	}
}

const SignupForm = Form.create({ name: 'normal_signup' })(Signup);

export default withRouter(SignupForm);
