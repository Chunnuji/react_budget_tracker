import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm= (props)=>{

    const [enteredTitle, setEnteredtitle]= useState('');
    const [enteredAmount, setEnteredamount]= useState('');
    const [enteredDate, setEntereddate]= useState('');

    const storeValue=(event)=>{
        setEnteredtitle(event.target.value);
        //console.log(enteredTitle);
    }
    const storeAmount=(event)=>{
        setEnteredamount(event.target.value);
    }
    const storeDate=(event)=>{
        setEntereddate(event.target.value);
        console.log(enteredDate);
    }

    const storeAllData=(event)=>{
        event.preventDefault();
        const expenseData={
            title : enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
       // console.log(expenseData);
       props.onStoreExpenseData(expenseData);
    }
    const [flag2,setFlag2]=useState(true);
    const changeIt=()=>{
        setFlag2(false);
        props.onSetFlag(flag2);
    }

    return(
<form onSubmit={storeAllData}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Item-Name</label>
            <input type='text' onChange={storeValue}/>
        </div>

        <div className="new-expense__control">
            <label>Amount</label>
            <input type='number'  onChange={storeAmount}/>
        </div>

        <div className="new-expense__control">
            <label>Date</label>
            <input type='date'  onChange={storeDate}/>
        </div>
        <div>
            <button className="new-expense__actions" type="submit" >Submit</button>
            <button className="new-expense__actions" type= "button"onClick={props.onSetFlag} >Cancel</button>
        </div>
    </div>
</form>
    )
}

export default ExpenseForm;