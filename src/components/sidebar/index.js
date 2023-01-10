import React, { useEffect, useState } from "react";
import Info from "../../asset/info.webp";
import SideBarButton from "./Button";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import apiClient from "../../spotify";

const Sidebar = () => {
	const [image, setImage] = useState(Info);

	useEffect(() => {
		apiClient.get("me").then((response) => {
			setImage(response.data?.images[0]?.url);
		});
	}, []);

	return (
		<div className="sidebar-container">
			<img src={Info} alt="Info" className="profile-img" />
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
