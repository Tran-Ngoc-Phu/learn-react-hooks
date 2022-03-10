import React, { useState } from 'react';
import PropTypes from 'prop-types';

ToDoForm.propTypes = {
    onSubmitNewItem: PropTypes.func,
};
ToDoForm.defaultProps = {
    onSubmitNewItem: null
}

function ToDoForm(props) {
    const [value, setValue] = useState('')
    const handleChangeValue = (e) =>{
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        // Prevent the browser from reload
        e.preventDefault();
        // Send the data to the parent component
        if(!props.onSubmitNewItem) return;
        const submitValue = {
            title: value
        }
        props.onSubmitNewItem(submitValue)

        // Set value to empty
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChangeValue} />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default ToDoForm;