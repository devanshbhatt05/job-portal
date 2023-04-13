import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../actions/postAction';
import { menuData } from '../actions/cartAction';
import { Link } from 'react-router-dom';

const Post = ({size}) => {
    const dispatch = useDispatch();
    const [flag, setflag] = useState('false')
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const data = useSelector((state)=>state.posts.items)

    return (
        <>
            {data.map((post) => (
                <div className="myproduct">
                    <div className="card prodcard" style={{ width: size }}>
                        <div className="card-body" key={post.id}>
                            <h5 className="card-title">{post.name}</h5>
                            <p className="card-text">{post.location}</p>
                            <p className="card-text">{post.city}</p>
                            <Link to="/food" className="btn btn-primary">
                                <button className="btn btn-primary" onClick={() => { setflag(!flag); dispatch(menuData(post.id)) }}>Order</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}


export default Post