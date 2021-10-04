/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains ) {
  const res = {};
  domains.map((d) => d.split('.').reverse()
      .reduce((acc, item) => {
        const key = acc + "." + item;
        res[key] = res[key] ? res[key]+1 : 1;

        return key;
      }, ''));

  return res;
}
