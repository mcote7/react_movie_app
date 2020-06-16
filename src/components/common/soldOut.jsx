import React from 'react';

const laurem = "Cosmic ocean encyclopaedia galactica of brilliant syntheses billions upon billions invent the universe prime number. Venture not a sunrise but a galaxyrise Cambrian explosion bits of moving fluff colonies stirred by starlight? Emerged into consciousness the carbon in our apple pies extraplanetary vanquish the impossible the only home we've ever known the carbon in our apple pies. Take root and flourish the sky calls to us muse about a mote of dust suspended in a sunbeam Euclid the only home we've ever known?"
const ipsum = "Corpus callosum billions upon billions stirred by starlight white dwarf extraordinary claims require extraordinary evidence preserve and cherish that pale blue dot. Euclid realm of the galaxies something incredible is waiting to be known something incredible is waiting to be known muse about take root and flourish. Hundreds of thousands bits of moving fluff a very small stage in a vast cosmic arena take root and flourish hearts of the stars dream of the mind's eye and billions upon billions upon billions upon billions upon billions upon billions upon billions."
const SoldOut = () => {
  return (
    <div className="jumbotron mt-5">
      <h1 className="display-4"> <a href="/">Sorry!</a></h1>
        <p className="lead">{laurem}{ipsum}</p>
      <hr className="my-4"/>
        <p>{ipsum}{laurem}</p>
      <a className="btn btn-primary btn-lg" href="/" role="button">
      <span role="img" aria-label="so" className="mike">&#x1f595; Go Back sold out &#x1f595;</span></a>
    </div>
  );
}
export default SoldOut;