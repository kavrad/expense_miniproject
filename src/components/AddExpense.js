import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function AddExpense(){
    const {addExpense,setData}=useContext(AppContext);

    return (
        <div className="w-[55%]  bg-violet-400 rounded-lg h-[15%] flex justify-center items-center my-4">
            
            {addExpense?(<button type="click" onClick={()=>{
                setData(prev =>({...prev,addExpense:!addExpense}))
            }} className="bg-fuchsia-950 text-white py-4 px-6 rounded-lg">Add New Expense</button>):(<form>Good</form>)}
            
        </div>
    )
}
export default AddExpense;