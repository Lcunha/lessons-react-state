import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = props => {

    const handleDeleteLastItem = event => {
        props.deleteLastItem();
    }
    return (
        <button onClick={handleDeleteLastItem} disabled={props.noItemsFound}>
          Delete Last Item
        </button>
    )
}

DeleteButton.propTypes = {
    deleteLastItem: PropTypes.func.isRequired,
    noItemsFound: PropTypes.func.isRequired,
}

export default DeleteButton;