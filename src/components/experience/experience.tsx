import Tag from "../tag/tag";

const Experience = () => {
	return (
		<div className="bc-col-4">
			<h2
				style={{ textAlign: "left", color: "lightblue", marginBottom: "16px", padding: "8px" }}
			>
				Experience
			</h2>
			<div style={{ flexDirection: "column", textAlign: "left", gap: "4px", display: "flex" }}>
				<div style={{ display: "flex" }}>
					<Tag label="2022" />
					<div style={{ marginLeft: "28px", marginBottom: "4px" }}>
						<b>Senior Software Developer</b>
						<p>EPAM Anywhere</p>
						<p>Bogotá Colombia</p>
					</div>
				</div>
				<div style={{ display: "flex" }}>
					<Tag label="2020" />
					<div style={{ marginLeft: "28px", marginBottom: "4px" }}>
						<b>Tecnical Leader</b>
						<p>Cirkus SAS</p>
						<p>Bogotá Colombia</p>
					</div>
				</div>
				<div style={{ display: "flex" }}>
					<Tag label="2018" />
					<div style={{ marginLeft: "28px", marginBottom: "4px" }}>
						<b>Software Factory Manager</b>
						<p>Stefanini</p>
						<p>Bogotá Colombia</p>
					</div>
				</div>
				<div style={{ display: "flex" }}>
					<Tag label="2017" />
					<div style={{ marginLeft: "28px", marginBottom: "4px" }}>
						<b>CTO</b>
						<p>TuBoleta</p>
						<p>Bogotá Colombia</p>
					</div>
				</div>
				<div style={{ display: "flex" }}>
					<Tag label="2020" />
					<div style={{ marginLeft: "28px", marginBottom: "4px" }}>
						<b>Project Manager</b>
						<p>DATCO Colombia</p>
						<p>Bogotá Colombia</p>
					</div>
				</div>
				<div style={{ display: "flex" }}>
					<Tag label="2020" />
					<div style={{ marginLeft: "28px", marginBottom: "4px" }}>
						<b>Project Manager</b>
						<p>ITELCA</p>
						<p>Bogotá Colombia</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
