import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Conponemts/Navbar";
import Cart from "./Pages/Cart/Cart";
import Shop from "./Pages/Shop/Shop";

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<Shop />}
					/>
					<Route
						path='/cart'
						element={<Cart />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
