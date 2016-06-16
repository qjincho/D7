import React, {Component} from "react";

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    console.log("ProjectDetail Mounted :)");
  }

  render() {
    let id = this.props.queryData.id;
    let title = this.props.queryData.title;
    let onDay = this.props.queryData.onDay;
    return (
      <div>
        <h1>Project Detail</h1><hr/>
        <h1>Title: {title}</h1>
        <h1>Onday: {onDay}</h1>

        <button>Cancel</button>
        <button onClick={this.props.saveDayDetail.bind(this, id, title, onDay)}>Save</button>
      </div>
    )
  }
}

export default ProjectDetail
