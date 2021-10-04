/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const s = str.split("");

  const res = [];
  let iter = 1;
  for (let i = 0; i<s.length; i++) {
    if(i === s.length - 1) {
      res.push({key: s[i], val: iter});
      break;
    }
    if(s[i+1] === s[i]) {
      iter++;
    }else {
      res.push({key: s[i], val: iter});
      iter = 1;
    }
  }

  return res.map(item=>(item.val > 1 ? item.val : "") + item.key).join('');
}
