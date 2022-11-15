import React from "react";
import { FiSearch } from "react-icons/fi";
import TrendingList from "./TrendingList";

const Trending = () => {
	return (
		<div className="hidden lg:block w-[350px] mt-2">
			<div className="bg-[#16181C] flex gap-2 rounded-full py-2 px-4 text-white items-center text-[20px] sticky top-1 z-10">
				<FiSearch />
				<input
					className="bg-transparent w-[100%] outline-none"
					type="text"
					placeholder="Search Twitter"
				/>
			</div>

			<div className="bg-[#16181C] rounded-[20px] text-white mt-4 px-4 py-4">
				{/* eslint-disable-next-line */}
				<h1 className="text-[20px] font-medium">What's Happening</h1>

				<TrendingList
					category="Entertainment · LIVE"
					title="Succession Season 4 Returns in the Spring"
					image="https://drive.google.com/file/d/1Ic-nb39AwZ-SLgg97o4EDMtN2KslOv5h/view?usp=sharing"
				/>
				<TrendingList
					category="Sports"
					title="Houston Astros Win the World Series"
					image="https://drive.google.com/file/d/1Gt55CwIz1iGLPqZBJn0qJ4iabJMnulNF/view?usp=sharing"
				/>
				<TrendingList
					category="Politics"
					title="Democrats Retain Control of the Senate with Win in Nevada"
					image="https://drive.google.com/file/d/1T2niCxiqYi-X_TNuueJI1q4z49OMcuTB/view?usp=sharing"
				/>
				<TrendingList
					category="Video Games"
					title="God of War: Ragnarok is Touted as Game of the Year Favorite"
					image="https://drive.google.com/file/d/12Wb2GcmfWJw4_Cp1FlHIoTlUg1uwCo0a/view?usp=sharing"
				/>
				<TrendingList
					category="Sports"
					title="World Cup Returns this Week in Qatar"
					image="https://drive.google.com/file/d/1LO617W7oHrKFE46eaIMrsoFgT6TTX8QC/view?usp=sharing"
				/>
			</div>
		</div>
	);
};

export default Trending;
