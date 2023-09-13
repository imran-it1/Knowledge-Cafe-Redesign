import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
	const { title } = bookmark;
	return (
		<div className=" bg-white rounded-md px-3 py-2 mt-4">
			<h1 className="text-lg font-medium">{title}</h1>
		</div>
	);
};

Bookmark.propTypes = {
	bookmark: PropTypes.object,
};

export default Bookmark;
