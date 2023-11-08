import twitterLogo from "./assets/twitter.png";
import "./App.css";
import TwitterList from "./TwitterList";
import CommentList from "./CommentList";

function App() {
	return (
		<>
			<h1>Twitter app</h1>
			<img src={twitterLogo} alt="twitter" />
			<CommentList />
		</>
	);
}

export default App;
