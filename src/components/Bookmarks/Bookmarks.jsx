import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
	return (
		<div className=" w-1/3 bg-gray-100 px-3 py-1 rounded-lg">
			<h1 className=" text-2xl font-bold">
				Bookmarked Blog: {bookmarks.length}
			</h1>

			<div className=" space-y-2">
				{bookmarks.map((bookmark, idx) => (
					<Bookmark key={idx} bookmark={bookmark} />
				))}
			</div>
		</div>
	);
};

Bookmarks.propTypes = {
	bookmarks: Array,
};

export default Bookmarks;
