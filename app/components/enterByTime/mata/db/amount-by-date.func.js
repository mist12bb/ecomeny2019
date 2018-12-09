import Moment from "moment";

export const amountByDate = (date) => {

  let a = Moment('2018-12-01');
  //let b = a.add(1, 'week');
  let datesList = [];
  let b;
  a.format();
  console.log(a.format());

  let counter = 0;
  while (counter < 20) {
    b = a.add(1, 'day');
    datesList.push(new Date( a.format()).toLocaleDateString())

    counter += 1;
  }
  /* console.log(a.format()); */



  /* datesList.forEach((day) => {

    console.log(day)
  }) */
  let amount = 3;
  if (datesList.indexOf(date) !== -1) {
    amount = 5;
    console.log('datesList.indexOf(date) !== -1')
  }else {
    console.log('datesList no contin ', date)

  }
  return amount;
}
