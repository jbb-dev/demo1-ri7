import React from 'react';
import Post from './Post';
import Axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import AddPost from './AddPost';

const ListPosts = () => {

  const [ list, setList ] = useState([]);

  const URL = 'https://jsonplaceholder.typicode.com/posts';

  const getPosts = () => {
    Axios
      .get(URL)
      .then(res => setList(res.data))
      .catch(err => console.log("err => ", err))
  };

  const deletePost = (index) => {
    let cloneList = [...list];
    cloneList.splice(index, 1);
    setList(cloneList);
  };

  useEffect(() => {
    getPosts();
  }, []);
  
  return (
    <div>
      {/* <AddPost 
        list={list}
        setList={setList} 
      /> */}
      {list.length > 0 ?
        <>
          <h2>ListPosts :</h2>
          {list.map((element, index) => 
            <Post
              key={index}
              title={element.title}
              body={element.body}
              index={index}
              deletePost={deletePost}
            />)
          }
        </>
      :
        <p>Veuillez patienter...</p>
      }
    </div>
  );
};

export default ListPosts;