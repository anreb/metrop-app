import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { MyContext } from '../../context';

const { Title } = Typography;

class Login extends Component {
	redirect() {
		this.props.history.push('/map');
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<MyContext.Consumer>
				{(context) => {
					return (
						<div
							style={{
								padding: '5rem 1.5rem 1.5rem 1.5rem',
								display: 'flex',
								justifyContent: 'center',
								height: 620
							}}
						>
							{localStorage.user ? (
								this.redirect()
							) : (
								<Form className='login-form' style={{ width: '350px' }} onSubmit={context.login}>
									<Form.Item>
										<Title level={2} style={{ fontFamily: 'METRO-DF' }}>
											Ingresar
										</Title>
									</Form.Item>
									<Form.Item>
										{getFieldDecorator('email', {
											rules: [ { required: true, message: 'Porfavor, ingresa tu email!' } ]
										})(
											<Input
												prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
												placeholder='Email'
												onChange={context.loginInputChange}
												type='text'
												name='email'
												id='email'
												required
											/>
										)}
									</Form.Item>
									<Form.Item>
										{getFieldDecorator('password', {
											rules: [ { required: true, message: 'Porfavor, ingresa tu contrseña!' } ]
										})(
											<Input
												prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
												type='password'
												placeholder='Contraseña'
												onChange={context.loginInputChange}
												name='password'
												id='password'
												required
											/>
										)}
									</Form.Item>
									<Form.Item>
										{getFieldDecorator('remember', {
											valuePropName: 'checked',
											initialValue: true
										})(<Checkbox>Recuerdame</Checkbox>)}
										<Button
											type='primary'
											htmlType='submit'
											className='login-form-button'
											style={{ fontFamily: 'METRO-DF', backgroundColor: '#FF8300' }}
										>
											Entrar
										</Button>
										O <Link to='/signup'>Registrate ahora!</Link>
									</Form.Item>
								</Form>
							)}
						</div>
					);
				}}
			</MyContext.Consumer>
		);
	}
}

const LoginForm = Form.create({ name: 'normal_login' })(Login);
LoginForm.contextType = MyContext;

export default withRouter(LoginForm);
