export default (text = "Hello") => {
  const elem = document.createElement("h3");
  elem.innerHTML = `[PRE] ${text} [AFTER]`;
  elem.className = "rounded bg-red-100 border max-w-md m-4 p-4";
  return elem;
};
