import { useRouter } from "next/router";
import React from "react";
import Moment from "react-moment";

const Post = ({ id, post }) => {
	console.log(post.userImg);

	const router = useRouter();

	return (
		<div
			className="mt-4 border-t border-gray-500 px-4 pt-6 pb-4 cursor-pointer"
			onClick={() => router.push(`/${id}`)}
		>
			<div className="grid grid-cols-[48px,1fr] gap-4 ">
				<div>
					{/* eslint-disable-next-line */}
					<img
						src={post?.userImg}
						alt=""
						className="h-12 w-12 rounded-full object-cover"
					/>
				</div>

				<div>
					<div className="block sm:flex gap-1">
						<h1 className="font-medium">{post?.username}</h1>

						<div className="flex">
							<p className="text-gray-500">@{post?.tag} &nbsp;·&nbsp;</p>
							<p className="text-gray-500">
								<Moment fromNow>{post?.timestamp?.toDate()}</Moment>
							</p>
						</div>
					</div>

					<p>{post?.text}</p>
					{/* eslint-disable-next-line */}
					<img
						className="max-h-[450px] object-cover rounded-[20px] mt-2"
						src={post?.image}
						alt=""
					/>


				</div>
			</div>
		</div>
	);
};

export default Post;
