// Main.jsx file

// Create a simple component
var MyComponent = React.createClass({

	render function(){

		return (
			<div>
				<p>Hello, my name is {this.props.name}</p>
				<p>I am interested in {this.props.interest}</p>
			</div>

		);
		
	}
});


ReactDOM.render(<MyComponent name="Christy", interest="piano"/>,
	document.querySelector('main')
);
    // In your render function...

            // Return div with two paragraphs

// Render your component in the `main` section
