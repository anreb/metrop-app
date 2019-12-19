import React, { Component, createContext } from 'react';
import MY_SERVICE from './services/index';

export const MyContext = createContext();

class MyProvider extends Component {
	state = {
		logged: false,
		login: {
			email: '',
			password: ''
		}
	};

	logout = () => {
		MY_SERVICE.logout()
			.then((res) => {
				localStorage.removeItem('user');
				this.setState({ logged: false });
			})
			.catch((err) => console.log(err));
	};

	login = (e) => {
		e.preventDefault();
		const { email, password } = this.state.login;
		console.log(email, password);
		MY_SERVICE.login({ email, password })
			.then(({ data }) => {
				localStorage.setItem('user', JSON.stringify(data));
				this.setState({ logged: true });
			})
			.catch((err) => console.log(err));
	};

	loginInputChange = ({ target: { value, name } }) => {
		this.setState({
			...this.state,
			login: {
				...this.state.login,
				[name]: value
			}
		});
	};

	render() {
		const { state, logout, login, loginInputChange } = this;
		return (
			<MyContext.Provider
				value={{
					state,
					logout,
					login,
					loginInputChange
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}

export default MyProvider;
