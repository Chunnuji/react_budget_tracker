import React, {useState} from "react";
import './NewExpenses.css';


import ExpenseForm  from "./ExpenseForm";
const NewExpenses=(props)=>{

    const saveStoreExpenseData=(data)=>{
        const Expensedata={
            ...data,
            id: Math.random().toString(),
        }
        //console.log(Expensedata);
        props.onStoreExpense(Expensedata);
        setFlag(false);
    }
    // const [receiveFlag,setReceiveFlag]=useState(true);
    // props.onChangeFlag(receiveFlag);

    const [flag,setFlag]=useState(false);
    const changeIt = ()=>{
        setFlag(true);
            }

    const changeIt2 = ()=>{
            setFlag(false);
                    }
    return(
        <div>
            <div className="new-expense">
            {flag?<ExpenseForm onSetFlag ={changeIt2} onStoreExpenseData={saveStoreExpenseData}/>:
            <botton onClick ={changeIt}>AddExpenses</botton>}
            
            </div>
            
        </div>

    )
}

export default NewExpenses;