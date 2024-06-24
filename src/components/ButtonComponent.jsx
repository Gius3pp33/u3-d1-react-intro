import React from 'react';

class ButtonComponent extends React.Component {
    render() {
        return <button className={`btn btn-${this.props.class} m-2`}>{this.props.text}</button>;
    }
};
  

export default ButtonComponent;