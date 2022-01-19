const alish = {
  a: +prompt("напишите число: "),
  b: +prompt("напишите число: "),
  c: prompt("напишите логические операторы: "),
  d: prompt("напишите текст: "),
  e: +prompt("напишите число: "),
  f: prompt("напишите логические операторы: "),
  g: +prompt("напишите число: "),
  h: prompt("напишите текст: "),
  i: +prompt("напишите число: "),
};

function tolib(alish) {
  for (let key in alish) {
    if (typeof alish[key] == 'number') {
      alish[key] *= 2;
    }
  }
  return alish;
}
tolib(alish);
console.log(alish);