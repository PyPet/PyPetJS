import "./App.css";

import {createClient} from '@supabase/supabase-js'
import {Provider} from 'react-supabase'

import Pet from "./Components/Pet.js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

let client = createClient(supabaseUrl, supabaseAnonKey)
function App() {
  return (<div className = "App"><Provider value = {client}><Pet pet = "pet1" />
          </Provider>
    </div>);
}

export default App;
