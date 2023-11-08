import axios from "axios";
import { useEffect, useState } from "react";

type TwitterType = {
	id: string;
	author: {
		userName: string;
	};
	message: string;
	date: number;
};

const TwitterList = () => {
	const [data, setData] = useState<TwitterType[]>([]);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		axios
			.get<TwitterType[]>("https://abdl8ridq9.execute-api.us-east-1.amazonaws.com/alpha/tweets")
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
			<div>twitterList</div>
			{data.map((tuit) => {
				return (
					<div key={tuit.id} style={{ textAlign: "left" }}>
						<span>{tuit.author.userName}</span>
						<span>{tuit.date}</span>
						<span>{tuit.message}</span>
					</div>
				);
			})}
		</>
	);
};

export default TwitterList;
