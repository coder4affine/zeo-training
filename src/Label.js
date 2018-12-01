import React, { Component } from "react";
// import PropTypes from 'prop-types'

// export default class Label extends Component {
//   //   static propTypes = {
//   //     prop: PropTypes
//   //   }

//   render() {
//     return (
//       <div>
//         <h1>{this.props.text}</h1>
//         <h1>{this.props.value}</h1>
//       </div>
//     );
//   }
// }

const label = ({ text, value }) => (
  <div>
    <h1>{text}</h1>
    <h1>{value}</h1>
  </div>
);

export default label;
