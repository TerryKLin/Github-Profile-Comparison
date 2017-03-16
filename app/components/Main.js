var React = require ("react");

var Main = React.createClass({
	render: function(){
		return(
			<div>
				Hello from Main!
			{this.props.children} {/* To render the Home component from the setup in routes.js */}
			</div>
		)
	}
});

module.exports = Main;