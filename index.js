function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  // target is in nested; pull out target
  var target = ".target";
  var nested = "#nested";

  return document.querySelector(`${nested} ${target}`);
}

function increaseRankBy(n) {
// console.log("in increaseRankby");
  // increase ranks of all list elements in all lists with the same class name

  var listClass; // HTML class name of list(s) whose elements are to be increased by n
  var itemsNodeList; // Node of list items, whose list class name is listClass

  listClass = ".ranked-list";
  itemsNodeList = document.querySelectorAll(`${listClass} li`);

  // console.log(itemsNodeList);
  for (var i = 0; i < itemsNodeList.length; i++) {
    itemsNodeList[i].innerHTML = parseInt(itemsNodeList[i].innerHTML) + n;
  }

}

function deepestChild() {
  var currElement = document.querySelector("#grand-node");
 // var currElementChildren = null;
  var retVal = null;

  while (currElement.children.length !==  0) {
       retVal = currElement;
       currElement = currElement.children[0];
  }
console.log(retVal);
  return retVal;
}
