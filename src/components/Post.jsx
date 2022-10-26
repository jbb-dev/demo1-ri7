import React from 'react';

const Post = (props) => {
    
    const deletePost = () => {
        let cloneList = [...props.list];
        cloneList.splice(props.index, 1);
        props.setList(cloneList);
    };

    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <button onClick={deletePost}>Supprimer</button>
        </div>
    );
};

export default Post;