//will remove "The" from name or title, then append to end auto capitalize if needed.
//change .title for any list attribute
export function removeThe(list) {
  const the = ", The";
  const theResult = [];
  list && list.forEach(item => {
    if(item.title.startsWith("The ")||item.title.startsWith("the ")) {
      let subString = item.title.substring(4);
      let result = subString.charAt(0).toUpperCase() + subString.slice(1);
      result += the;
      item.title = result;
    }
    theResult.push(item);
  })
  // console.log("result, The", theResult)
  return theResult;
};

//to sort by ascending =>
// .sort((a, b) => (a.title > b.title) ? 1 : -1);