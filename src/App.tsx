import { GroceryItems } from "./components/groceryItems";
import { Reducer } from "./components/reducer-demo";

const App = () => {
	return (
		<div className="min-h-screen flex bg-black text-white items-center justify-center text-2xl font-bold text-center">
			Hello Vite + React + TailwindCSS!
			{/* <GroceryItems /> */}
			 <Reducer />
		</div>
	);
};

export default App;
