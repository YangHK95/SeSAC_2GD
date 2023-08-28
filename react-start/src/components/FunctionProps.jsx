/*-------------경우1----------------------- */
// function FunctionProps(props) {
// 1. props 객체로 받아서,prop.key로 접근해서 사용하는 방법
//   // props = {
//   //   name: "",
//   //   krPrice: number,
//   //   number: number,
//   // };
//   // return (
//   //   <div>
//   //     <h5>{props.name}</h5>
//   //     <p>
//   //       {props.number}개에{props.krPrice}원(${props.krPrice / 1000})
//   //     </p>
//   //     <hr />
//   //   </div>
//   // );
//   /* ----------------경우2----------- */
// 2.props 객체로 받고 구조분해할당이용
//   const { name, krPrice, number } = props;
//   // let name = props.nmae;
//   return (
//     <div>
//       <h5>{name}</h5>
//       <p>
//         {number}개에{krPrice}원(${props.krPrice / 1000})
//       </p>
//       <hr />
//     </div>
//   );
// }
/*-----------------경우 3------------------ */
// 3. props 매개변수로 받는 것이 아닌 바로 받는 방법
// function FunctionProps({ name, number, krPrice }) {
//   return (
//     <div>
//       <h5>{name}</h5>
//       <p>
//         {number}개에{krPrice}원(${krPrice / 1000})
//       </p>
//       <hr />
//     </div>
//   );
// }
/*------------경우4------------------------------ */

import { Children } from "react";

// 4. children 과 defaultProps 사용
function FunctionProps(props) {
  const { name, krPrice, number, children } = props;
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에{krPrice}원(${krPrice / 1000})
      </p>
      <p>{children}</p>
      <hr />
    </div>
  );
}

FunctionProps.defaultProps = {
  name: "fruit",
  krPrice: 10000,
  number: 5,
};
export default FunctionProps;
