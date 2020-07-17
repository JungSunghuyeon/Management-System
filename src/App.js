import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customer = [
{
'id' :1,
'image':'https://placeimg.com/64/64/1',
'name':'홍길동',
'birthday':'961222',
'gender':'남자',
'job':'학생'
},
{
  'id' :2,
  'image':'https://placeimg.com/64/64/2',
  'name':'정성현',
  'birthday':'960402',
  'gender':'남자',
  'job':'인턴' 
},
{
'id' :3,
'image':'https://placeimg.com/64/64/3',
'name':'김덕배',
'birthday':'990821',
'gender':'남자',
'job':'장군'
}

]


class App extends Component {
  render() {
    return (
      <div>
        {customer.map(c => {
          return <Customer key ={c.id} id ={c.id} image={c.image}
          name={c.name} birthday={c.birthday} gender = {c.gender}
          job = {c.job} ></Customer>
        })}
      </div>
    );
  }
}

export default App;
