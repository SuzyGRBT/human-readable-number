module.exports = function toReadable (number) {
  let digitArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let teenArray = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tenArray = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  let value = number;
  let digit = number % 10;
  value = (number - digit) / 10;
  let ten = value % 10;
  value = (value - ten) / 10;
  let hundred = value;
  
  let hundredString;
  if (hundred !== 0) {
    hundredString = `${digitArray[value]} hundred`;
  } else {
    hundredString = '';
  };
  
  let tenString;
  if (ten > 1) {
    tenString = tenArray[ten - 2];
  } else if (ten === 1) {
    tenString = teenArray[digit];
  } else {
    tenString = '';
  };
  
  let digitString;
  if (ten === 1  || (hundred !== 0 || ten !== 0) && digit === 0) {
    digitString = '';
  } else {
    digitString = digitArray[digit];
  };

  let numberString = [hundredString, tenString, digitString];
  return numberString.filter(element => element !== '').join(' ');
}
