import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Conponemts/Navbar";
import Cart from "./Pages/Cart/Cart";
import Shop from "./Pages/Shop/Shop";
import Index from "./Pages/Index/Index";
import { ShopContextProvider } from "./Context";

function App() {
	return (
		<div className='App'>
			<ShopContextProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route
							path='/'
							element={<Index />}
						></Route>
						<Route
							path='/shop'
							element={<Shop />}
						/>
						<Route
							path='/cart'
							element={<Cart />}
						/>
					</Routes>
				</Router>
			</ShopContextProvider>
		</div>
	);
}

export default App;
