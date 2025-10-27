import { UseCallback } from "./components/callback-demo";
import { AuthProvider } from "./components/context-demo";
import { AuthButton } from "./components/context-demo/auth-button";
import { AuthView } from "./components/context-demo/auth-view";
import { GroceryItems } from "./components/groceryItems";
import { Reducer } from "./components/reducer-demo";
import { RefDemo } from "./components/ref-demo";
import { FoodMenu } from "./components/uselayout-effect-demo";

const App = () => {
	return (
		// <div className="min-h-screen flex bg-black text-white items-center justify-center text-2xl text-center">
			// {/* Hello Vite + React + TailwindCSS! */}
			// {/* <GroceryItems /> */}
			//  {/* <Reducer /> */}
			//  {/* <UseCallback /> */}
			//  {/* <RefDemo /> */}
			//  {/* <AuthProvider>
			 
			//  <div>
			//  <AuthView />
			//  <AuthButton />
			//  </div>
			//  </AuthProvider> */}
		// </div>
					 <>
			 <FoodMenu />
			 </>
	);
};

export default App;
