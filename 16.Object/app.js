// Rectangle---------
const rectangle = {
  height: 5,
  weight: 3,
  acreage: function () {
    return this.height * this.weight;
  },
  perimeter: function () {
    return (this.height + this.weight) * 2;
  },
};
const chuvi = rectangle.perimeter();
const dientich = rectangle.acreage();
console.log(dientich);
console.log(chuvi);
// Temperature-------------
const Temperature = {
  doC: 25,
  doF: function () {
    return (this.doC * 9) / 5 + 32;
  },
  doK: function () {
    return this.doC + 273.15;
  },
};
const doF = Temperature.doF();
console.log(`1 do C = ${Math.round(doF)} do F`);
const doK = Temperature.doK();
console.log(`1 do C = ${Math.round(doK)} do Kevin`);
