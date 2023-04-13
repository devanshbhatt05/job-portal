// import React, { Component } from 'react'
// import { connect, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import { fetchPosts } from '../actions/postAction';

// import { Link } from 'react-router-dom';
// import { menuData } from '../actions/cartAction';

// class Posts extends Component {


//     componentWillMount() {
//         this.props.fetchPosts();
//     }




//     componentWillReceiveProps(nextProps) {
//         if (nextProps.newPost) {
//             this.props.posts.unshift(nextProps.newPost);
//         }
//     }



//     render() {
//         const onClick =(id) => {
//             const dispatch=useDispatch();
//             dispatch(menuData(id))
//         }
//         const postItems = this.props.posts.map(post => (
//             <div key={post.id}>
//                 <h3>{post.name}</h3>
//                 <p>{post.location}</p>
//                 <p>{post.city}</p>
//                 <Link to='/food'>
//                     <button className='btn btn-primary ' onClick={onClick}>Menu</button>
//                 </Link>
//             </div>
//         ));
//         return (
//             <div>

//                 {postItems}
//             </div>
//         )
//     }
// }

// Posts.propTypes = {
//     fetchPosts: PropTypes.func.isRequired,
//     posts: PropTypes.array.isRequired,
//     newPost: PropTypes.object
// }

// const mapStateToProps = state => ({
//     posts: state.posts.items,
//     newPost: state.posts.item
// });

// export default connect(mapStateToProps, { fetchPosts })(Posts);