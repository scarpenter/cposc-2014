var Master = React.createClass({
  initialData: [
    { detailId: 1, speed: 25, direction: "South" },
    { detailId: 2, speed: 25, direction: "South" },
    { detailId: 3, speed: 25, direction: "South" }
  ],

  getInitialState: function() {
    return { sensors: this.initialData };
  },

  updateData: function() {
    var self = this;
    var newData = this.initialData.map(function(row) {
      return { detailId: row.detailId, speed: self.refs.speed.getDOMNode().value, direction: self.refs.direction.getDOMNode().value };
    });
    this.setState({ sensors: newData });
  },

  render: function() {
    return (
      <div>
        <div className="master">
          <p>
            <label htmlFor="speed">Speed:</label>
            <input type="text" id="speed" name="speed" defaultValue="25" ref="speed" />
          </p>
          <p>
            <label htmlFor="direction">Direction:</label>
            <input type="text" id="direction" name="direction" defaultValue="South" ref="direction" />
          </p>
        </div>
        <button type="button" onClick={this.updateData}>Update!</button>
        <DetailList sensors={this.state.sensors}/>
      </div>
    );
  }
});

var DetailList = React.createClass({
  render: function() {
    var rows = this.props.sensors.map(function(row){
      return <DetailRow detailId={row.detailId} speed={row.speed} direction={row.direction} key={row.detailId}/>;
    });
    return (
      <table className="detail-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Speed</th>
            <th>Direction</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});

var DetailRow = React.createClass({
  showId: function() {
    window.alert("My Id is " + this.props.detailId);
  },
  render: function() {
    return (
      <tr>
        <td>{this.props.detailId}</td>
        <td>{this.props.speed}</td>
        <td>{this.props.direction}</td>
        <td>
          <button type="button" onClick={this.showId}>Show My Id</button>
        </td>
      </tr>
    );
  }
});

React.render(
  <Master/>,
  document.getElementById("content")
);
