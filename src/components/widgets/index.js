import React, { useEffect, useState } from "react";
import apiClient from "../../spotify";
import WidgetCard from "./WidgetCard";

const Widgets = ({ artistId }) => {
	const [similar, setSimilar] = useState([]);
	const [featured, setFeatured] = useState([]);
	const [newRelease, setNewRelease] = useState([]);

	useEffect(() => {
		if (artistId) {
			apiClient
				.get(`/artists/${artistId}/related-artists`)
				.then((res) => {
					const a = res?.data?.artists.slice(0, 3);
					setSimilar(a);
				})
				.catch((err) => {
					console.log(err);
				});

			apiClient
				.get(`/browse/featured-playlists`)
				.then((res) => {
					const a = res?.data?.playlists?.items?.slice(0, 3);
					setFeatured(a);
				})
				.catch((err) => {
					console.log(err);
				});

			apiClient
				.get(`/browse/new-release`)
				.then((res) => {
					const a = res?.data?.album?.items?.slice(0, 3);
					setNewRelease(a);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [artistId]);

	return (
		<div className="widget-body flex">
			<WidgetCard title={"Similar Artists"} similar={similar} />
			<WidgetCard title={"Made For You"} featured={featured} />
			<WidgetCard title={"New Release"} newRelease={newRelease} />
		</div>
	);
};

export default Widgets;
