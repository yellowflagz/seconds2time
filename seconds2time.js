// Simple program that takes X seconds as a input and returns them in a human-friendly way.

// 1 year = 31536000s

function seconds2time(seconds) {
  let days = 0,
    years = 0,
    hours = 0,
    minutes = 0,
    answer = ``;

  // I used mostly conditionals and divisions / remainings to do the conversion

  if (seconds >= 31536000) {
    years = Math.floor(seconds / 31536000);
    seconds = seconds % 31536000;
  }
  if (seconds >= 86400 && seconds < 31536000) {
    days = Math.floor(seconds / 86400);
    seconds = seconds % 86400;
  }
  if (seconds >= 3600 && seconds < 86400) {
    hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
  }
  if (seconds >= 60 && seconds < 3600) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
  }

  // Then i used more conditionals to set out the time format. I ran several tests without issues, but you
  // might find typos/exceptions i missed.

  if (years == 1 && seconds == 0 && minutes == 0 && days == 0 && hours == 0) {
    answer += ` ${years} year`;
  } else if (
    years > 1 &&
    seconds == 0 &&
    minutes == 0 &&
    days == 0 &&
    hours == 0
  ) {
    answer += ` ${years} years`;
  } else if (years > 1) {
    answer += ` ${years} years,`;
  } else if (years == 1) {
    answer += ` ${years} year,`;
  }

  if (
    days == 1 &&
    seconds == 0 &&
    minutes == 0 &&
    (hours == 0) & (years == 0)
  ) {
    answer += ` ${days} day`;
  } else if (
    days > 1 &&
    seconds == 0 &&
    minutes == 0 &&
    hours == 0 &&
    years == 0
  ) {
    answer += ` ${days} days`;
  } else if (days == 1 && hours == 0) {
    answer += ` ${days} day`;
  } else if (days > 1) {
    answer += ` ${days} days,`;
  } else if (days == 1) {
    answer += ` ${days} day,`;
  }

  if (hours == 1 && seconds == 0) {
    answer += ` ${hours} hour`;
  } else if (hours > 1 && seconds == 0) {
    answer += ` ${hours} hours`;
  } else if (hours > 1 && minutes == 0) {
    answer += ` ${hours} hours`;
  } else if (hours == 1 && minutes == 0) {
    answer += ` ${hours} hour`;
  } else if (hours > 1) {
    answer += ` ${hours} hours,`;
  } else if (hours == 1) {
    answer += ` ${hours} hour,`;
  }

  if (minutes == 1 && seconds == 0 && hours == 0 && years == 0) {
    answer += ` ${minutes} minute`;
  } else if (minutes > 1 && seconds == 0 && hours == 0 && years == 0) {
    answer += ` ${minutes} minutes`;
  } else if (minutes == 1 && seconds == 0) {
    answer += ` and ${minutes} minute`;
  } else if (minutes > 1 && seconds == 0) {
    answer += ` and ${minutes} minutes`;
  } else if (minutes > 1) {
    answer += ` ${minutes} minutes`;
  } else if (minutes == 1) {
    answer += ` ${minutes} minute`;
  }

  if (seconds == 1 && days == 0 && minutes == 0 && hours == 0 && years == 0) {
    answer += ` ${seconds} second`;
  } else if (
    seconds > 1 &&
    days == 0 &&
    minutes == 0 &&
    hours == 0 &&
    years == 0
  ) {
    answer += ` ${seconds} seconds`;
  } else if (seconds > 1) {
    answer += ` and ${seconds} seconds`;
  } else if (seconds == 1) {
    answer += ` and ${seconds} second`;
  }

  // Handling the 0 seconds input and trimming the answer so we get 0 blank spaces at the begining of the string
  if (answer == 0) {
    return "now";
  } else {
    return answer.trim();
  }
}
