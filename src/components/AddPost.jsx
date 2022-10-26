import React, { useState } from 'react';
import axios from 'axios';

const AddPost = (props) => {

    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');

    const URL = 'https://jsonplaceholder.typicode.com/posts';

    const savePost = () => {
        axios
            .post(URL, {
                title: title,
                body: body
            })
            .then(res => {
                const newPost = res.data;
                let tempoArray = [...props.list];
                tempoArray.unshift(newPost);
                props.setList(tempoArray);
            })
            .catch(error => console.log("err => ", error))
        ;
    };

    return (
        <div>
            <button onClick={() => console.log(props.list)}>LIST</button>
            <label>Mon titre</label>
            <input 
                type='text'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <label>Contenu de mon post</label>
            <input 
                type='text'
                value={body}
                onChange={e => setBody(e.target.value)}
            />
            <button onClick={savePost}>Enregistrer</button>
        </div>
    )
}

export default AddPost