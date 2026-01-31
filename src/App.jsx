import React, { Component } from 'react'
import CourseCard from './assets/CourseCard';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        { name: "Data Structure and Algorithms", duration: "40hrs", price: "Rs.100", img: "/jpg1.jpg" },
        { name: "Java Programming", duration: "40hrs", price: "Rs.100", img: "/jpg2.png" },
        { name: "React JS", duration: "40hrs", price: "Rs.100", img: "/jpg3.jpg" },
        { name: "Machine Learning", duration: "40hrs", price: "Rs.100", img: "/jpg4.png" },
      ]
    };
  }
  render() {
    const { courses } = this.state;
    return (
      <div>
        <div className='app'>
          <div className='header'>course catalog-2500030941-Umrikar Sushil Amit</div>
          <div className='section'>
            {courses.map((data)=>(
              <CourseCard data={data}/>
            ))}
          </div>
          <div className='footer'>Copyright @2026.All rights reserved.-Umrikar Sushil Amit-KL University</div>
        </div>
      </div>
    )
  }
}