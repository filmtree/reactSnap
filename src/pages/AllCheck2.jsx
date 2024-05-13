import './styles.css';
import { useState } from 'react';

const CheckboxGroup = ({ checkboxData }) => {
	const [checkboxes, setCheckboxes] = useState(checkboxData);

	// 각 체크박스 클릭 시 이벤트 함수
	const handleCheck = (i) => {
		// 새로운 체크박스 데이터를 updatedCheckBox에 복사.
		const updatedCheckBox = [...checkboxes];
		updatedCheckBox[i] = {
			...updatedCheckBox[i],
			// 새로운 체크박스 checked를 기존 체크박스 checked 속성 Toggle 값으로.
			checked: !checkboxes[i].checked,
		};
		// checked 키가 토글되어 들어간 데이터로 기존데이터 변경
		setCheckboxes(updatedCheckBox);
	};

	// 전체 체크박스 클릭 시 이벤트 함수
	const handleSelectAll = () => {
		const updatedCheckBox = checkboxes.map((checkbox) => ({
			...checkbox,
			// areAllSelected() 함수가 true를 반환하면
			// !areAllSelected()는 false가 되므로 모든 체크박스가 선택되지 않은 상태가 됩니다.
			// 반면 areAllSelected() 함수가 false를 반환하면
			// !areAllSelected()는 true가 되므로 모든 체크박스가 선택된 상태가 됩니다.
			checked: !areAllSelected(),
		}));
		setCheckboxes(updatedCheckBox);
	};

	// 전체 체크박스가 체크되는 조건
	const areAllSelected = () => {
		return checkboxes.every(
			// 체크박스에 "checked" 속성이 존재하는지 확인후 checkbox.checked 부울값 체크.
			(checkbox) => 'checked' in checkbox && checkbox.checked
		);
	};

	// 전체가 체크 되었는지 확인하는 메서드
	// const areAllChecked = () => {
	//   return checkboxes.every((checkbox) => "checked" in checkbox);
	// };

	return (
		<div>
			<label>
				<input type='checkbox' checked={areAllSelected()} onChange={handleSelectAll} />
				Select all
			</label>
			<br />
			{checkboxes.map((checkbox, index) => (
				<label key={index}>
					<input type='checkbox' checked={'checked' in checkbox ? checkbox.checked : false} onChange={() => handleCheck(index)} />
					{checkbox.label}
				</label>
			))}
			{/* {areAllChecked() && <p>All data are checked!</p>} */}
		</div>
	);
};

export default function App() {
	const data = [{ label: 'Checkbox 1' }, { label: 'Checkbox 2' }, { label: 'Checkbox 3' }];

	return (
		<div className='App'>
			<CheckboxGroup checkboxData={data} />
		</div>
	);
}
