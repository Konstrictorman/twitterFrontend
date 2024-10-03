const Profile = () => {
	return (
		<div className="bc-col-4" style={{ backgroundColor: "lightcoral" }}>
			<h2
				style={{ textAlign: "left", color: "lightblue", marginBottom: "32px", padding: "8px" }}
			>
				About Me
			</h2>
			<div style={{ flexDirection: "column", textAlign: "left", gap: "4px", display: "flex" }}>
				<p style={{ textAlign: "justify", padding: "4px" }}>
					I have wide experience in the execution of software projects, some of them good, some
					others not as good. Most of them related to J2EE technology. I am proud of my scars.
					I had played all sort of roles through those software projects, such as developer,
					architect, technical leader and PM. At this moment i am focused in my front-end
					skills, I have participated in six middle size React projects so far, some of them
					involving Next.js. I also have been studying React Native. I am a responsible person
					and a challenge lover. I propose solutions.
				</p>
			</div>
		</div>
	);
};

export default Profile;
