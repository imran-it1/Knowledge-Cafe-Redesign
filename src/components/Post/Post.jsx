import PropTypes from "prop-types";
import { useState } from "react";
import { HiBookmark } from "react-icons/hi";
const Post = ({ post, handleBookmarks, handleMarkAsRead }) => {
	const {
		id,
		cover,
		author_img,
		author,
		posted_date,
		reading_time,
		title,
		hashtags,
	} = post;

	const [btnColor, setBtnColor] = useState(false);
	const handleBtnColor = () => {
		setBtnColor(!btnColor);
	};

	return (
		<div className=" space-y-4 mb-5">
			<div>
				<img className=" rounded-md w-full" src={cover} alt="" />
			</div>
			<div className="flex justify-between items-center">
				<div className=" flex gap-2 items-center">
					<div>
						<img className="w-14" src={author_img} alt="" />
					</div>
					<div>
						<h3 className="text-lg font-bold">{author}</h3>
						<p className=" text-gray-700">{posted_date}</p>
					</div>
				</div>

				<div className=" flex items-center gap-1">
					<p className=" text-gray-500">{reading_time} min read</p>
					<button
						onClick={() => {
							handleBtnColor();
							handleBookmarks(post, id, reading_time);
						}}
						title="Add To Bookmark"
						className={`text-2xl ${
							btnColor ? " text-red-600" : ""
						} transition-all duration-200 ease-in`}
					>
						<HiBookmark></HiBookmark>
					</button>
				</div>
			</div>

			<div>
				<h1 className=" text-3xl font-bold">{title}</h1>
			</div>

			{hashtags.map((hashtag, index) => (
				<span className=" mr-2 text-gray-700" key={index}>
					#{hashtag}
				</span>
			))}

			<div onClick={() => handleMarkAsRead(id, reading_time)}>
				<span className=" underline text-purple-700 font-semibold cursor-pointer">
					Mark as read
				</span>
			</div>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.object.isRequired,
	handleBookmarks: Array.isRequired,
	handleMarkAsRead: PropTypes.array,
};

export default Post;
