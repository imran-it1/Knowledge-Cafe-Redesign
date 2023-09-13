import avatar from "../../../public/images/profile.png";

const Header = () => {
	return (
		<div className=" container mx-auto flex justify-between items-center my-5 bg-gray-100 p-2 rounded-md">
			<h1 className="text-3xl font-semibold">Knowledge Cafe</h1>
			<img src={avatar} alt="" />
		</div>
	);
};

export default Header;
