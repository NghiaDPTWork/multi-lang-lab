import "./App.css";
import Card from "./components/Card";
import Hello from "./components/Hello";

function App() {
  return (
    <>
      <div className="border-2 border-red-500 rounded-lg p-4 m-4">
        <h1 className="text-3xl font-bold underline ">Hello world!</h1>
      </div>

      <Card>
        <Hello name="Nghia Duong" />
      </Card>

      <Card>
        <h1 className="font-">This is another Card Frame</h1>
        <div>This is text of Children part!</div>
      </Card>
    </>
  );
}

export default App;
