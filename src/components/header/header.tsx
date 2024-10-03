import precioso from "../../assets/Precioso.png";

const Header = () => {
	return (
		<div
			style={{
				backgroundColor: "lightgray",
				borderTopRightRadius: "24px",
				borderTopLeftRadius: "24px",
				display: "flex",
				padding: "16px",
			}}
			className="bc-w-100"
		>
			<img
				src={precioso}
				alt="foto"
				style={{
					borderRadius: "100px",
					width: "15%",
					height: "15%",
					border: "1px solid lightgray",
				}}
			/>
			<div style={{ margin: "16px", textAlign: "start" }}>
				<h1>Ricardo Álvarez</h1>
				<h3 style={{ color: "aquamarine" }}> Full Stack Developer</h3>
			</div>
		</div>
	);
};

export default Header;
