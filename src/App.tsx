import "./bds.min.css";
import "./App.css";
import Header from "./components/header/header";
import PersonalInfo from "./components/personalInfo/personalInfo";
import Experience from "./components/experience/experience";
import Profile from "./components/profile/profile";

function App() {
	return (
		<div className="bc-w-100">
			<Header />
			<div style={{ display: "flex" }}>
				<PersonalInfo />
				<Experience />
				<Profile />
			</div>
		</div>
	);
}

export default App;
