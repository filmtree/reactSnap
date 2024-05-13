import React, { Component } from 'react';
import './styles.css';
import classNames from 'classnames';
import Mail from './Mail';
import Cafe from './Cafe';

const menuList = {
	0: <Mail />,
	1: <Cafe />,
};

class App extends React.Component {
	constructor(props) {
		super();

		this.state = {
			menu: 0,
		};
	}

	changeMenu = (menuIndex) => {
		this.setState({ menu: menuIndex });
	};

	render() {
		return (
			<div className='wrap'>
				<div className='menuBar'>
					<ul className='tabs'>
						<li className={`${this.state.menu === 0 ? 'active' : ''}`} onClick={() => this.changeMenu(0)}>
							Mail
						</li>
						<li
							className={
								/** classNames 라이브러리 사용 */ classNames({
									active: this.state.menu === 1,
								})
							}
							onClick={() => this.changeMenu(1)}
						>
							Cafe
						</li>
					</ul>
				</div>
				<div className='contentArea'>{menuList[this.state.menu]}</div>
			</div>
		);
	}
}

export default App;
