// get obj {offset, unit} representing date differnce between today and given date
function getDateDifference(fromDate) {
  const today = new Date();

  if (fromDate.getFullYear() !== today.getFullYear()) {
    return {
      offset: fromDate.getFullYear() - today.getFullYear(),
      unit: 'year'
    };
  } else if (fromDate.getMonth() !== today.getMonth()) {
    return {
      offset: fromDate.getMonth() - today.getMonth(),
      unit: 'month'
    };
  } else {
    // You can make this narrower to time if you want
    return {
      offset: fromDate.getDate() - today.getDate(),
      unit: 'day'
    };
  }
}

// get relative date representation (eg. "in 2 years") from given date
function getRelativeDate(fromDate) {
  const { offset, unit } = getDateDifference(fromDate);
  const format = new Intl.RelativeTimeFormat();
  return format.format(offset, unit);
}

