// react component
// component: thanh phan, co the tai su dung o nhieu noi, su dung nhieu component nho de tao nen mot trang web lon.
import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
// i don't need reactDOM anymore because index.js is already covering that.
// Each component has its own local state with respect to the global state of the entire app.
// Just like in the school for example. It has its state of a number of techers, number of students, class rooms. Each student has its own state of number of textbooks, pens,etc...

// Always 'return' in render() method.
class App extends Component {
	// Add state to 'Add' Component.
	// constructor allows us to have local state within class.
	// props argument, we can name this anything we like.
	// SetState comes right from the ReactComponent interface when you look at the react.js node_module.
	constructor(props) {
		super(props);

		// In react, state is always an object
		this.state = {
			deadline: 'February 5, 2019',
			newDeadline: ''
		}
		// console.log(this.props);
	}	

	render() {
		return (
			// class is alraedy reserved keyword within javascript
			// having handlers without an anonymous function will cause a loop and crash after.

			// <div class='App'></div>
			<div className="App">
				<div className="App-title">
					Countdown to Lunar New Year 
					<div>
						({this.state.deadline})
					</div>
				</div>

				<div>
					<Clock
						// example Props
						deadline = {this.state.deadline}
					/>
				</div>

				<div>
					<img src={require('./tom.png')} alt='err'/>
				</div>		
			</div>			
		);
	}
}

// set as default component.
export default App;
