
import React from 'react';
import './ExpanseItem.css';
import ExpenseDate from './ExapenseDate';
import Card from '../UI/Card';

const ExpanseItem = (props)=>{

    return (
        <Card className="expense-item">
            <div>
            <ExpenseDate date={props.date}></ExpenseDate>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">
                Rs.{props.price}
            </div>
            
        </Card>
    );

}

export default ExpanseItem;