function roundToTwoDecimalPlaces(number) {
  const format = new Intl.NumberFormat(navigator.language, {
    maximumFractionDigits: 2
  });
  return format.format(number);
}

// :"5.49"
console.log(roundToTwoDecimalPlaces(5.49125));

// :"5.5"
console.log(roundToTwoDecimalPlaces(5.49621));