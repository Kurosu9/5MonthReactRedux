import React from 'react';
import { useDispatch } from 'react-redux';
import { getBPost } from '../../store/bPostSlice';

function Post({post}) {

    const dispatch = useDispatch()
    const getInfo =()=>{
        dispatch(getBPost(post.id))
    }

    return (
        <div>
            <h3>title: {post.title}</h3>
            <button onClick={getInfo}>get info</button>
            <h1>-------------------------</h1>
        </div>
    );
}

export default Post;