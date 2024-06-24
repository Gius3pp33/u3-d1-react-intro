import React from 'react';

class BodyContent extends React.Component {
  render() {
    return (
      <div className="bg-light text-white min-vh-100">
        {this.props.children}
      </div>
    );
  }
}

export default BodyContent;