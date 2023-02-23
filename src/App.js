import "./App.css";
import Expenses from "./components/Expenses/Expenses";

export default function App() {
    return (
        <div className="App">
            <header className="App-header text-center text-2xl py-5">
                Expenses Dashboard
            </header>
            <Expenses />
        </div>
    );
}
