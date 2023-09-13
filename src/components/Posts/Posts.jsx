import { useEffect } from "react";
import { useState } from "react";
import Post from "../Post/Post";
import PropTypes from "prop-types";

const Posts = ({ handleBookmarks, handleMarkAsRead }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("blogs.json")
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

	return (
		<div className=" w-2/3">
			{posts.map((post) => (
				<Post
					key={post.id}
					post={post}
					handleBookmarks={handleBookmarks}
					handleMarkAsRead={handleMarkAsRead}
				/>
			))}
		</div>
	);
};

Posts.propTypes = {
	handleBookmarks: PropTypes.any.isRequired,
	handleMarkAsRead: PropTypes.array,
};

export default Posts;
