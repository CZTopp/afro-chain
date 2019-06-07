import React from "react";
import './PageBlocks.css'

class PageBlocks extends React.Component {
  state = { bloccs: [] }

  componentDidMount() {
    fetch('/blocks')
    .then(res => res.json())
    .then(bloccs => this.setState({ bloccs }));
  }

  render() {
    return (
      <div className="blocks-page-container flex-container">
        <div className="title-container"><h1>Block Info</h1></div>
        <main>
          {this.state.bloccs.map(blocc => (
            <div className="blocc-container flex-container" key={blocc.timestamp}>
              <p className="blocc-text">
                { `Hash: ${blocc.hash} Timestamp: ${blocc.timestamp}` }
              </p>
            </div>
          ))}
        </main>
      </div>
    );
  }
}
export default PageBlocks;
