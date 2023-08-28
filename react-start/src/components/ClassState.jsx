import { Component } from "react";

class ClassState extends Component {
  /* 옛날 방식 */
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     banana: "바나나",
  //   };
  // }
  state = {
    banana: "바나나",
  };

  render() {
    const { banana } = this.state;
    return (
      <div>
        {/* <div>{this.state.banana}</div> */}
        <div>{banana}</div>
        <button onClick={() => this.setState({ banana: "banana" })}>
          영어로 변경(class형)
        </button>
      </div>
    );
  }
}

export default ClassState;
