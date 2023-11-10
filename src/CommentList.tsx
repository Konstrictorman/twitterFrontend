import axios from "axios";
import { useEffect, useState } from "react";

type CommentType = {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
};

const CommentList = () => {
	const [data, setData] = useState<CommentType[]>([]);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		axios
			.get<CommentType[]>("https://jsonplaceholder.typicode.com/comments")
			.then((res) => {
				setData(res.data);
			})
			.catch((e) => {
				console.log(e);
			})
			.finally(() => {
				setIsFetching(false);
			});
	}, []);

	if (isFetching) {
		return <p> ... loading </p>;
	}

	return (
		<>
			<h3>Comments List</h3>
			<ul>
				{data.slice(0, 100).map((comment) => {
					return (
						<li key={comment.id} className="left">
							<p>
								<span className="author">
									@{comment.email.substring(0, comment.email.indexOf("@"))}
								</span>
								: <span>{comment.body}</span>
							</p>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default CommentList;
