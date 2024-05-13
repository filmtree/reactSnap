/* 
useState의 함수형 업데이트

배열 데이터를 업데이트 하는 과정에서 최신 상태의 배열을 참조하면 배열이 바뀔때 마다 함수가 새로 만들어 집니다.
이렇게 계속 함수가 만들어지는 상황을 방지하도록 useState의 함수형 업데이트 기능을 사용하거나 useReducer를 사용.

예를 들어 setTodos를 사용할 때 새로운 상태를 파라미터로 넣는 대신, 상태 업데이트를 어떻게 할지 정의해 주는 업데이트 함수를
넣을 수도 있습니다. 이를 함수형 업데이트라고 부릅니다.

const [number, setNumber] = useState(0);
// PrevNumbers는 현재 number 값을 가리킵니다.

const onIncrease = useCallback(
  () => setNumber(prevNumber => prevNumber + 1),
  [],
);

setNumber(number+1)을 하는 것이 아니라, 위 코드처럼 어떻게 업데이트 할지 정의해 주는 업데이트 함수를 넣어 줍니다. 그러면 useCallback을 사용할 때
두번째 파라미터로 넣는 배열에 number를 넣지 않아도 됩니다.

*/

import { useRef, useState, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
	const array = [];
	for (let i = 1; i <= 2500; i++) {
		array.push({
			id: i,
			text: `할 일 ${i}`,
			checked: false,
		});
	}
	return array;
}

const App = () => {
	const [todos, setTodos] = useState(createBulkTodos);
	// 고윳값으로 사용될 id
	// ref를 사용하여 변수 담기
	const nextId = useRef(4);
	const onInsert = useCallback((text) => {
		const todo = {
			id: nextId.current,
			text,
			checked: false,
		};

		setTodos((todos) => todos.concat(todo));
		nextId.current += 1;

		// nextId 1씩 더하기
	}, []);

	const onRemove = useCallback((id) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	}, []);

	const onToggle = useCallback((id) => {
		setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
	}, []);
	return (
		<TodoTemplate>
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
		</TodoTemplate>
	);
};
export default App;
