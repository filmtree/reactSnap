import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
	const [active, setActive] = useState('');
	const Navilists = [
		{ id: 1, name: 'home', el: '/', child: [] },
		{
			id: 2,
			name: 'one',
			el: '/one',
			child: [
				{ id: 21, name: 'one1', el: '/childone1' },
				{ id: 22, name: 'one2', el: '/childone2' },
				{ id: 23, name: 'one3', el: '/childone3' },
			],
		},
		{
			id: 3,
			name: 'two',
			el: '/two',
			child: [
				{ id: 31, name: 'two1', el: '/childtwo1' },
				{ id: 32, name: 'two2', el: '/childtwo2' },
			],
		},
		{
			id: 4,
			name: 'three',
			el: '/three',
			child: [
				{ id: 41, name: 'three1', el: '/childthree1' },
				{ id: 42, name: 'three2', el: '/childthree2' },
				{ id: 43, name: 'three3', el: '/childthree3' },
			],
		},
		{
			id: 5,
			name: 'four',
			el: '/four',
			child: [
				{ id: 51, name: 'four1', el: '/childfour1' },
				{ id: 52, name: 'four2', el: '/childfour2' },
			],
		},
	];
	const activeStyle = {
		text: {
			fontWeight: 'bold',
			color: '#FFFFFF',
		},
	};
	return (
		<div className='gnb-wrapper'>
			<ul className='gnb-lists'>
				{Navilists.map((list, index) => {
					const classes = ['gnb-sub-lists', active === index ? 'is-active' : ''];
					return (
						<li className='gnb-list' key={list.id}>
							<NavLink to={list.el} style={({ isActive }) => (isActive ? activeStyle.text : undefined)} className={({ isActive }) => (isActive ? 'gnb-item is-active' : 'gnb-item')} onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive(null)}>
								{list.name}
							</NavLink>
							<ul className={classes.join(' ')}>
								{list.child.map((sub) => {
									return (
										<li className='gnb-sub-list' key={sub.id}>
											{sub.name}
										</li>
									);
								})}
							</ul>
							{/* {active === index ? (
                <ul
                  className={
                    "gnb-sub-lists" + (active === index ? " is-active" : "")
                  }
                >
                  {list.child.map((sub) => {
                    return (
                      <li className="gnb-sub-list" key={sub.id}>
                        {sub.name}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                ""
              )} */}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Header;
