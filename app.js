import ReactDOM from "react-dom";


const App=()=>{
    return (
        <div class="app">
            <h1>React App</h1>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);