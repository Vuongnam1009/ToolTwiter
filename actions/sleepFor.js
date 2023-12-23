const SleepFor = async (page, min, max) => {
  let sleep_duration = random(min, max);
  // console.log("waiting for: " + sleep_duration);
  await page.waitForTimeout(sleep_duration)


};

const random = (min, max) => {
  return Math.floor(Math.random() *(max - min) + min);
}

module.exports = SleepFor