const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const useDate = () => {
  let current_date = new Date();
  current_date = `${monthNames[current_date.getMonth()]} ${current_date.getDate()}, ${current_date.getFullYear()}`;
  return current_date;
};

export default useDate;
