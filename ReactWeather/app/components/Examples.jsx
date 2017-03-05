var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
	render: function() {
		return (
			<div>
				<h1 className="text-center">
					Examples
				</h1>
				<p>
					Here are a few examples to try out:
				</p>
				<ul>
					<li>
						<Link to='/?location=Philadelphia'>Philadelphia</Link>
					</li>
					<li>
						<Link to='/?location=Hong Kong'>Hong Kong</Link>
					</li>
				</ul>
			</div>
		)
	}
})

module.exports = Examples;
