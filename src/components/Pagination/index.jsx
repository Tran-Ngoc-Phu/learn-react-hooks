import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onChangePage:PropTypes.func
};
Pagination.defaultProps = {
    onChangePage: null
}

function Pagination(props) {
    const {pagination, onChangePage} = props
    const {_page, _limit, _totalRows} = pagination
    const totalPages = Math.ceil(_totalRows / _limit)

    function handleChangePage(newPage){
        if(!onChangePage) return;
        onChangePage(newPage)
    }

    return (
        <div>
            <button 
                disabled={_page <= 1}
                onClick={() => handleChangePage(_page - 1)}
            >Prev</button>
            <button 
                disabled={_page >= totalPages}
                onClick={() => handleChangePage(_page + 1)}
            >Next</button>
        </div>
    );
}

export default Pagination;