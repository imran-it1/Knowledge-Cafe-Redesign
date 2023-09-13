import { useState } from "react";
import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Swal from "sweetalert2";
import Readtime from "./components/Readtime/Readtime";

function App() {
	const [bookmarks, setBookmarks] = useState([]);
	const [readTime, setReadTime] = useState(0);

	const handleBookmarks = (post, id, time) => {
		console.log(time);
		const isSimillar = bookmarks.find((bookmark) => bookmark.id === id);
		if (isSimillar) {
			return Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Already Bookmarked",
				footer: '<a href="">Why do I have this issue?</a>',
			});
		}
		setBookmarks([...bookmarks, post]);
		setReadTime(readTime + time);
	};

	const handleMarkAsRead = (id, time) => {
		const remainingBookMark = bookmarks.filter(
			(bookmark) => bookmark.id !== id,
		);
		setBookmarks(remainingBookMark);
		setReadTime(readTime - time);
	};

	return (
		<>
			{/* Top Part */}
			<Header />
			<Readtime readTime={readTime} />
			{/* Middle Part */}
			<div className="flex gap-5 container mx-auto">
				<Posts
					handleBookmarks={handleBookmarks}
					handleMarkAsRead={handleMarkAsRead}
				/>
				<Bookmarks bookmarks={bookmarks} />
			</div>
			{/* Bottom Part */}
		</>
	);
}

export default App;
