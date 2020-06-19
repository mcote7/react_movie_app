export function sortTheMovies(movies) {
  const the = ", The";
  const theResult = [];
  movies && movies.forEach(mov => {
    if(mov.title.startsWith("The ")) {
      let subTitle = mov.title.substring(4);
      subTitle += the;
      mov.title = subTitle
    }
    theResult.push(mov);
  })
  // console.log("result, the!", theResult)
  const allMoviesSorted = theResult
  return allMoviesSorted;
};




// .sort((a, b) => (a.title > b.title) ? 1 : -1);