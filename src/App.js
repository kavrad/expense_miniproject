import AddExpense from "./components/AddExpense";
import ShowExpense from "./components/ShowExpenses";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center gap-y-4 my-4">
      <AddExpense></AddExpense>
      <ShowExpense></ShowExpense>
    </div>
  );
}

export default App;
