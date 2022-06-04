// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (arrayDates, index) => {
  const newDates = [];
  for (let i = 0; i < arrayDates.length; i++) {
    const converDates = (new Date(arrayDates[i]).getTime() / 1000).toString();
    newDates.push(converDates);
  };

  if (index === undefined) {
    newDates.sort((x,y) => x - y);
    return newDates.join("-");
  } else {
    newDates.sort((x,y) => x + y);
    return newDates[index];
  }
}

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
