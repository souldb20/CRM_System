import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '침착맨',
  'birthday': '961222',
  'gender': '남자',
  'job': '만화가'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '주호민',
  'birthday': '921122',
  'gender': '남자',
  'job': '스트리머',
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '김풍',
  'birthday': '000000',
  'gender': '남자',
  'job': '요리사'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
      </div>
    );
  }
}


export default App;
