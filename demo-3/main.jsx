// Main.jsx file

// Data to pass to our List elements
var InputComponent = React.createClass({

    //set initial state
    getInitialState:function() {
        return {text:''};
    },

    // Update function
    update:function(event) {
        var value = event.target.value;
        this.setState({text:value});
    },
 

    // Render function
    render:function(){
        return (

            <div>
                <input onChange={this.update} />
                <br/>
                <p>The user has typed: </p>
                <text>{this.state.text}</text>
            </div>
        );

    }
})

// Render your component in the `main` section
ReactDOM.render(<InputComponent/>,
    document.querySelector('main')
);


