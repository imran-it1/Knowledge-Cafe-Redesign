import PropTypes from "prop-types";

const Readtime = ({ readTime }) => {
	return (
		<div className="container mx-auto text-center mb-5 bg-blue-100 py-2 rounded-md">
			<h1 className=" text-blue-800 text-lg font-bold">
				Spent time on read: {readTime}
			</h1>
		</div>
	);
};

Readtime.propTypes = {
	readTime: PropTypes.number,
};

export default Readtime;
