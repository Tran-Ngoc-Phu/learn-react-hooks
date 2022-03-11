import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    postList: PropTypes.array,
    onChangePage: PropTypes.func,
};
PostList.defaultProps ={
    postList: [],
    onChangePage: null
}

function PostList(props) {
    const postList = props.postList
    return (
        <div>
            <ul>
                {postList.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
        
    );
}

export default PostList;