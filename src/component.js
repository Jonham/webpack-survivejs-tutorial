export default (text = "Hello") => {
  const elem = document.createElement("div");
  elem.innerHTML = text;
  return elem;
};
