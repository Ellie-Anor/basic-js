const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === null || date == undefined) {
    return 'Unable to determine the time of year!';
  } 

  try {
    Date.prototype.getTime.call(date);
  } catch (e) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();

  if (month === 2 || month === 4 || month === 3) {
    return 'spring';
  } else if (month === 6 || month === 7 || month === 5) {
    return 'summer';
  } else if (month === 9 || month === 10 || month === 8) {
    return 'autumn';
  } else {return 'winter'; }
}

module.exports = {
  getSeason
};
