import React, {Component} from 'react';
import '../avoidFOUC'
import render from './template';
// import './style.scss';
import '../www/css/style.css'


class App extends Component {}
//js prototype property allows you to add new properties to object constructors
//in this case the render is a new property of the App class constructor,
//and this render allows us to render "template" into App component then into "root" through App
//The Object.prototype is on the top of the prototype inheritance chain in JS
//e.g. Date,Array objects inherit from Date.prototype,Array.prototype ....
//Sometimes when you want to add new properties (or methods) to all existing objects of a given type
//function Person(first, last, age, eyecolor) {
    //this.firstName = first;
    //this.lastName = last;
    //this.age = age;
    //this.eyeColor = eyecolor;
    //}
    //Person.prototype.nationality = "English";

App.prototype.render = render;

export default App;
