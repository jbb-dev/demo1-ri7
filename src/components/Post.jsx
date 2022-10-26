import React from 'react';

const Post = (props) => {

    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <button onClick={() => props.deletePost(props.index)}>Supprimer</button>
        </div>
    );
};

export default Post;