//import ExpanseTracker from "./components/ExpanseTracker";
import React,{useState} from "react";
import Expenses from "./components/Expenses/expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const Initial_expense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {

  const [newExpense,setNewExpense] = useState(Initial_expense);
  const saveNewExpense=(data)=>{
    console.log('In app');
    console.log(data);

    setNewExpense((prevExpense)=>{
      return [data, ...prevExpense];
    });
  }

  //const [cancelFlag,setCancelFlag]=useState(true);
  return (
    <div>
     <NewExpenses onStoreExpense={saveNewExpense} />
      <Expenses expenses={newExpense}></Expenses>
    </div>
  );
}

export default App;


