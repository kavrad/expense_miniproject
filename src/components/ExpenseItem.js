function ExpenseItem(){
    return (
        <div className="flex justify-between items-center w-[80%] max-h-fit bg-violet-500 rounded-lg">
            <div>
            <p>Date</p>
            <p>Title</p>
            </div>
            <div className="border-3 border-solid  border-white bg-purple-800">
            <p className="text-white">$Amount</p>
            </div>
           
        </div>
    )
}

export default ExpenseItem;