import React, { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const Feed = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		onSnapshot(
			query(collection(db, "posts"), orderBy("timestamp", "desc")),
			(snapshot) => {
				setPosts(snapshot.docs);
			}
		);
	}, [db]);

	console.log(posts);
	return (
   <div className="">Feed</div>
   )
};

export default Feed;
