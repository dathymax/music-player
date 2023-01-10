import React from "react";
import { IconContext } from "react-icons";
import WidgetEntry from "./WidgetEntry";
import { FiChevronRight } from "react-icons/fi";

const WidgetCard = ({
	title,
	similar = [],
	featured = [],
	newRelease = [],
}) => {
	return (
		<div className="widget-card-body">
			<p className="widget-title">{title}</p>
			{similar
				? similar.map((artist) => {
						return (
							<WidgetEntry
								title={artist?.name}
								subtitle={artist?.follower?.total}
								image={artist?.images[2]?.url}
							/>
						);
				  })
				: featured
				? featured.map((playlist) => {
						return (
							<WidgetEntry
								title={playlist?.name}
								subtitle={playlist?.tracks?.total}
								image={playlist?.images[2]?.url}
							/>
						);
				  })
				: newRelease
				? newRelease.map((album) => {
						return (
							<WidgetEntry
								title={album?.name}
								subtitle={album?.artists[0]?.total}
								image={album?.images[2]?.url}
							/>
						);
				  })
				: null}
			<div className="widget-fade">
				<div className="fade-button">
					<IconContext.Provider
						value={{ size: "24px", color: "#c4d0e3" }}
					>
						<FiChevronRight />
					</IconContext.Provider>
				</div>
			</div>
		</div>
	);
};

export default WidgetCard;
