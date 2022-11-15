import React from "react";

const TrendingList = ({ category, title, image }) => {
	return (
		<div className="mt-4 flex items-center">
			<div>
				<p className="text-gray-500 text-[14px] mb-1">{category}</p>
				<h1 className="font-medium pr-2">{title}</h1>
			</div>

			<div>
            {/* eslint-disable-next-line */}
				<img
					className="rounded-[20px] w-[120px] h-[120px]"
					src={image}
					alt=""
				/>
			</div>
		</div>
	);
};

export default TrendingList;
