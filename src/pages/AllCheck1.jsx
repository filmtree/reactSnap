import './styles.css';
import { useState } from 'react';

const CheckBoxGroup = ({ checkboxData }) => {
	const [checkedItems, setCheckedItems] = useState([]);

	const handleAllChecked = (event) => {
		if (event.target.checked) {
			setCheckedItems(checkboxData.slice());
		} else {
			setCheckedItems([]);
		}
	};

	const handleChecked = (event) => {
		// Items: Prev checkedItems
		setCheckedItems((checkedItems) => {
			if (event.target.checked) {
				return [...checkedItems, event.target.value];
			} else {
				return checkedItems.filter(
					// 체크되지 않은 값이므로 checkedItems에서 선택한 체크박스외 다른 리스트만 반환.
					(item) => item !== event.target.value
				);
			}
		});
	};

	return (
		<div className='checkbox-group'>
			<div>
				<div>
					<label>
						<input type='checkbox' checked={checkedItems.length === checkboxData.length} onChange={handleAllChecked} />
						Select All
					</label>
				</div>
				<ul>
					{checkboxData.map((item) => (
						<li>
							<div key={item}>
								<label>
									<input type='checkbox' value={item} checked={checkedItems.includes(item)} onChange={handleChecked} />
									{item}
								</label>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

const App = () => {
	const data = ['item1', 'item2', 'item3'];
	return (
		<div className='App'>
			<CheckBoxGroup checkboxData={data} />
		</div>
	);
};

export default App;
