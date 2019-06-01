import React from "react";

class PageBlocks extends React.Component {
  state = { bloccs: [] }

  componentDidMount() {
    fetch('/blocks')
    .then(res => res.json())
    .then(bloccs => this.setState({ bloccs }));
  }

  render() {
    return (
      <div>
        <h1>Blocks</h1>
        <ul>
          {this.state.bloccs.map(blocc => (
            <li key={blocc.timestamp}>{ `${blocc.hash} ${blocc.timestamp} ${blocc.nance}` }</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default PageBlocks;
