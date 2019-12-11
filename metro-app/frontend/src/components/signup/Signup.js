import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';

const { Title } = Typography;

class Signup extends Component {
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div style={{ padding: '5rem 1.5rem 1.5rem 1.5rem', display: 'flex', justifyContent: 'center' }}>
				<Form className='signup-form' style={{ width: '350px' }}>
					<Form.Item>
						<Title level={2}>Registrarse</Title>
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
							rules: [ { required: true, message: 'Porfavor, ingresa tu contraseña!' } ]
						})(
							<Input
								prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
								type='password'
								placeholder='Contraseña'
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('password', {
							rules: [ { required: true, message: 'Porfavor, confirma tu contraseña!' } ]
						})(
							<Input
								prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
								type='password'
								placeholder='Confirmar contraseña'
							/>
						)}
					</Form.Item>
					<Form.Item>
						<Button type='primary' htmlType='submit' className='signup-form-button'>
							Registrarse
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

const SignupForm = Form.create({ name: 'normal_signup' })(Signup);

export default SignupForm;
