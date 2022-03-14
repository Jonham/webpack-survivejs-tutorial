export default (text = "Hello") => {
  const elem = document.createElement("h3");
  elem.innerHTML = `[PRE] ${text} [AFTER]`;
  return elem;
};
