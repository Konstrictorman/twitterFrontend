const PersonalInfo = () => {
	return (
		<div className="bc-col-4">
			<h2
				style={{ color: "lightblue", marginBottom: "16px", padding: "8px", textAlign: "start" }}
			>
				PersonalInfo
			</h2>
			<div style={{ flexDirection: "column", textAlign: "left", gap: "4px", display: "flex" }}>
				<div style={{ borderBottomStyle: "dashed", borderBottomColor: "lightblue" }}>
					<b>Name:</b>Ricardo Álvarez
				</div>
				<div style={{ borderBottomStyle: "dashed", borderBottomColor: "lightblue" }}>
					<b>Marital Status:</b>Married
				</div>
				<div style={{ borderBottomStyle: "dashed", borderBottomColor: "lightblue" }}>
					<b>Phone number:</b>+57 3107693549
				</div>
				<div style={{ borderBottomStyle: "dashed", borderBottomColor: "lightblue" }}>
					<b>Nationality:</b>Colombian
				</div>
				<div style={{ borderBottomStyle: "dashed", borderBottomColor: "lightblue" }}>
					<b>Born:</b>Cúcuta, Norte de Santander
				</div>
				<div style={{ borderBottomStyle: "dashed", borderBottomColor: "lightblue" }}>
					<b>DNI:</b>13512402
				</div>
				<div style={{ borderBottomStyle: "dashed", borderBottomColor: "lightblue" }}>
					<b>Birthay:</b>13512402
				</div>
				<div style={{ borderBottomStyle: "dashed", borderBottomColor: "lightblue" }}>
					<b>Address:</b>Cra 2a #10a-599 sur, T7 Apto 210
				</div>
				<div style={{ borderBottomStyle: "dashed", borderBottomColor: "lightblue" }}>
					<b>Email:</b>Rikhardho@hotmail.com
				</div>
				<h2
					style={{
						color: "lightblue",
						marginBottom: "16px",
						marginTop: "32px",
						padding: "8px",
						textAlign: "start",
					}}
				>
					Education
				</h2>
				<div style={{ borderBottomStyle: "dashed", borderBottomColor: "lightblue" }}>
					<b>Post-Degree:</b>Software enterprise architecture specialization
				</div>
				<div style={{ borderBottomStyle: "dashed", borderBottomColor: "lightblue" }}>
					<b>Post-Degree:</b>TI projects specialization
				</div>
				<div style={{ borderBottomStyle: "dashed", borderBottomColor: "lightblue" }}>
					<b>Degree:</b>Systems engineer
				</div>
			</div>
		</div>
	);
};

export default PersonalInfo;
