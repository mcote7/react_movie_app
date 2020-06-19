//change .title for any list attribute
export function removeThe(list) {
  const the = ", The";
  const theResult = [];
  list && list.forEach(item => {
    if(item.title.startsWith("The ")) {
      let subString = item.title.substring(4);
      subString += the;
      item.title = subString;
    }
    theResult.push(item);
  })
  // console.log("result, The", theResult)
  return theResult;
};

//to sort by ascending =>
// .sort((a, b) => (a.title > b.title) ? 1 : -1);