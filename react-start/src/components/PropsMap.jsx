import FunctionProps from "./FunctionProps";

export default function PropsMap({ arr }) {
  console.log(arr);
  const numArr = [10, 20, 30, 40, 50];
  const newArr = numArr.map((data) => {
    return data * 2;
  });
  console.log(newArr);
  return (
    <>
      <h4>가격표</h4>
      {/* name,number,krPrice */}
      {/* <FunctionProps
        name={arr[0].name}
        krPrice={arr[0].krPrice}
        numeber={arr[0].count}
      ></FunctionProps>
      <FunctionProps
        name={arr[1].name}
        krPrice={arr[1].krPrice}
        numeber={arr[1].count}
      ></FunctionProps>
      <FunctionProps
        name={arr[2].name}
        krPrice={arr[2].krPrice}
        numeber={arr[2].count}
      ></FunctionProps>
      <FunctionProps
        name={arr[3].name}
        krPrice={arr[3].krPrice}
        numeber={arr[3].count}
      ></FunctionProps> */}
      {arr.map((data, index) => {
        return (
          <FunctionProps
            name={data.name}
            krPrice={data.krPrice}
            number={data.count}
            key={index}
          ></FunctionProps>
        );
      })}
    </>
  );
}
