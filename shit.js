  let harmonicSeries = [];
function generateHarmonics(noteArraySize){
  let numerator = 1, denominator = 2, fractions = [];
  for(let i = 0; i <= noteArraySize; i++){
    fractions.push((numerator/denominator));
    numerator++;
    if(numerator===denominator){
      numerator = 1;
      denominator++;
    }
  }
  harmonicSeries = fractions.filter((item, pos) => {
    return fractions.indexOf(item) == pos;
  })
  return harmonicSeries.sort();
}

 console.log(generateHarmonics(100))
