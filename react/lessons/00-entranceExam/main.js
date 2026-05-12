function counter(value) {
  return value++;
}

function notification(value) {
  if (value > 0 && value <= 3) {
    return "Normal";
  } else if (value > 3) {
    return "Getting high ...";
  } else {
    return "Too many ...";
  }
}
