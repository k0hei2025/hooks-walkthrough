import { UseCallback } from "./components/callback-demo";
import { GroceryItems } from "./components/groceryItems";
import { Reducer } from "./components/reducer-demo";
import { RefDemo } from "./components/ref-demo";

const App = () => {
	return (
		<div className="min-h-screen flex bg-black text-white items-center justify-center text-2xl font-bold text-center">
			Hello Vite + React + TailwindCSS!
			{/* <GroceryItems /> */}
			 {/* <Reducer /> */}
			 {/* <UseCallback /> */}
			 <RefDemo />
		</div>
	);
};

export default App;
