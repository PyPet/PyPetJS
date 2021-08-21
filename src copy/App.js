import "./App.css";
import Pet from "./Components/Pet.js";

let client = createClient(supabaseUrl, supabaseAnonKey)
function App() {
  return (
    <div className="App">
      <Pet/>
    </div>
  );
}

export default App;
