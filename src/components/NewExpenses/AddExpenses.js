import React, {useState} from "react";
import NewExpenses from "./NewExpenses";

const AddExpenses=(props)=>{
    const [addData,setAddData]=useState('');
    const saveNewExpense=(data)=>{
        setAddData(data);

    }
    props.addExpenses(addData);
    let content=<p>Add Data</p>;
    if(addData.length>0){
       content= <NewExpenses onStoreExpense={saveNewExpense}/>
    }

    return(
        <>
        {content};
        </>
    )

}

export default AddExpenses;