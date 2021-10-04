/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options ) {
  let  {repeatTimes, separator = "+", addition, additionRepeatTimes, additionSeparator = "|"} = options;

  if(addition === false || addition === null) {
    addition = ""+ addition;
  }
  let addTxt = addition || '';
  if(addition && additionRepeatTimes) {
    const arrTxtList = new Array(additionRepeatTimes).fill(addition);
    addTxt = arrTxtList.join(additionSeparator);
  }

  str = str+addTxt;
  if(repeatTimes) {
    const arrStrTxtList = new Array(repeatTimes).fill(str);
    str = arrStrTxtList.join(separator);
  }

  return str;
}
