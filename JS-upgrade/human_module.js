const friends = ["철수", "영희"];

function showName(name) {
  if (name >= friends.length || name < 0) return "잘못된 name";
  return friends[name];
}

export { friends, showName };

const human = ["철수", "영희"];
const showName = () => {
  human.forEach((el) => console.log(el));
};
export { human, showName };
