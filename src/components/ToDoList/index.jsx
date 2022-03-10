import React from 'react';
import PropTypes from 'prop-types';

ToDoList.propTypes = {
    toDoList: PropTypes.array,
    onRemoveItemClick: PropTypes.func
};
ToDoList.defaultProps = {
    toDoList: [],
    onRemoveItemClick: null
  };
function ToDoList(props) {
    const toDoList = props.toDoList

    const handleToDoItemClick = (id) =>{
        if(!props.onRemoveItemClick) return;
        props.onRemoveItemClick(id)
    }
    return (
        <ul>
            {toDoList.map(toDo => 
                <li 
                    key={toDo.id}
                    onClick={() => handleToDoItemClick(toDo.id)}
                >{toDo.title}</li>
            )}
        </ul>
    );
}

export default ToDoList;