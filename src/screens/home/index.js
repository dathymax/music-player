import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../library";
import Feed from "../feed";
import Trending from "../trending";
import Player from "../player";
import Favourites from "../favourites";
import Sidebar from "../../components/sidebar";
import Login from "../auth";
import { setClientToken } from "../../spotify";

const Home = () => {
	const [token, setToken] = useState("");

	useEffect(() => {
		const tokenLocal = window.localStorage.getItem("token");
		const hash = window.location.hash;
		window.location.hash = "";

		if (!tokenLocal && hash) {
			const _token = hash.split("&")[0].split("=")[1];
			window.localStorage.setItem("token", _token);
			setToken(_token);
			setClientToken(_token);
		} else {
			setToken(tokenLocal);
			setClientToken(tokenLocal);
		}
	}, []);

	return !token ? (
		<Login />
	) : (
		<Router>
			<div className="main-body">
				<Sidebar />
				<Routes>
					<Route path="/" element={<Library />} />
					<Route path="/feed" element={<Feed />} />
					<Route path="/trending" element={<Trending />} />
					<Route path="/player" element={<Player />} />
					<Route path="/favourites" element={<Favourites />} />
				</Routes>
			</div>
		</Router>
	);
};

export default Home;
