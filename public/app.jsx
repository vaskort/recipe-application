var React = require('react');
var ReactDOM = require('react-dom');

var Home = React.createClass({
  render: function () {
    return (
      <div>
        test
      </div>
    );
  }
});

ReactDOM.render(
  <Home />,
  document.getElementById('app')
);
