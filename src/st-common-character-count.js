/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  const a1 = s1.split('').sort();
  const a2 = s2.split('').sort();
  let c = 0;

  for (let i = 0; i < a1.length; i++) {
    if (a1.includes(a2[i]) && a2.includes(a1[i])) {
      c++;
    }
  }

  return c;
}
