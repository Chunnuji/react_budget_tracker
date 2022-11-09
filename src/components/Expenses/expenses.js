import React,{useState} from "react";
import ExpanseTracker from "./ExpanseItem";
import './expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses=(props)=>{
    const [filteredYear,setFilteredYear]=useState('2020');

    const filterYear=(selectedYear)=>{
        setFilteredYear(selectedYear);
        console.log(filteredYear);
    }
    
    const filterdExpenses=props.expenses.filter(e=>{return e.date.getFullYear().toString()===filteredYear});

    let expenseContent = <p>No expenses</p>;
    if(filterdExpenses.length>0){
        expenseContent =filterdExpenses.map(e=><ExpanseTracker
        key={e.id} date={e.date} title={e.title} price={e.amount}/>)
    }

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected ={filteredYear} onSelectYear={filterYear}/>
                {expenseContent}
                <ExpenseChart  expenses={filterdExpenses}/>
        </Card>
        
        </div>
    );
}

export default Expenses;