function formatPriceRange(prices) {
  const format = new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: 'USD'
  });

  return format.formatRange(
    Math.min(...prices),
    Math.max(...prices)
  );
}

// : "US$1.75-$11.00"
console.log(
  formatPriceRange([5.5, 3, 1.75, 11, 9.5])
);