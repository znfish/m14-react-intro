// Main.jsx file

// Create a simple component
var myComponent = React.createClass({

    // In your render function...
    render function() {

        // Set variables `name` and `interest`
        var name = "Jimmy";
        var interest = "Play piano";


        // Return div with two paragraphs
        return (
        	<div>
        		<p>Hello my name is {name}</p>
        		<p>I am interested in {interest}</p>
        	</div>
        );
    }
});


// Render your component in the `main` section
ReactDOM.render(<myComponent/>,
	document.querySelector('main')
);

