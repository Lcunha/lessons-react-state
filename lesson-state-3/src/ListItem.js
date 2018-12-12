import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ListItem = props => {
    return (
        <div>
            <p className="items">Items</p>
            <ol className="item-list">
            {props.items.map((item, index) => <Item key={index} item={item}/>)}
            </ol>
        </div>
    );
};

ListItem.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ListItem;