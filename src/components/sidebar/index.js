import React from "react";
import MyLove from "../../asset/my-love.jpg";
import SideBarButton from "./Button";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

const Sidebar = () => {
	return (
		<div className="sidebar-container">
			<img src={MyLove} alt="MyLove" className="profile-img" />
			<div>
				<SideBarButton
					title="Feed"
					to="/feed"
					icon={<MdSpaceDashboard />}
				/>
				<SideBarButton
					title="Trending"
					to="/trending"
					icon={<FaGripfire />}
				/>
				<SideBarButton title="Player" to="/player" icon={<FaPlay />} />
				<SideBarButton
					title="Favourites"
					to="/favourites"
					icon={<MdFavorite />}
				/>
				<SideBarButton title="Library" to="/" icon={<IoLibrary />} />
			</div>
			<SideBarButton title="Sign out" to="" icon={<FaSignOutAlt />} />
		</div>
	);
};

export default Sidebar;
