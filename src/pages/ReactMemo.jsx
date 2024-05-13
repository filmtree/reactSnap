import React from 'react';

import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';

import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
	const { id, text, checked } = todo;
	return (
		<div className='TodoListItem'>
			{' '}
			<div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
				{' '}
				{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} <div className='text'>{text}</div>{' '}
			</div>{' '}
			<div className='remove' onClick={() => onRemove(id)}>
				{' '}
				<MdRemoveCircleOutline />{' '}
			</div>{' '}
		</div>
	);
};

/* 
컴포넌트의 props가 바뀌지 않았다면, 
리렌더링하지 않도록 설정하여 함수 컴포넌트의 리렌더링 성능을 
최적화해 줄 수 있습니다.    
React.memo의 사용법은 매우 간단합니다. 
컴포넌트를 만들고 나서 감싸 주기만 하면 됩니다. */

export default React.memo(TodoListItem);
