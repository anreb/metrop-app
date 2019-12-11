import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

class Login extends Component {
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div style={{ padding: '5rem 1.5rem 1.5rem 1.5rem', display: 'flex', justifyContent: 'center' }}>
				<Form className='login-form' style={{ width: '350px' }}>
					<Form.Item>
						<Title level={2}>Ingresar</Title>
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('username', {
							rules: [ { required: true, message: 'Porfavor, ingresa tu email!' } ]
						})(
							<Input
								prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder='Email'
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
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true
						})(<Checkbox>Recuerdame</Checkbox>)}
						<Button type='primary' htmlType='submit' className='login-form-button'>
							Entrar
						</Button>
						O <Link to='/signup'>Registrate ahora!</Link>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

const LoginForm = Form.create({ name: 'normal_login' })(Login);

export default LoginForm;
