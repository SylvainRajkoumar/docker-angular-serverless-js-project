const provideBoost = () => {
  return Math.floor(Math.random() * (6 - 3 + 1)) + 3;
};

const provideBoostHandler = async msg => ({
  status: 200,
  body: JSON.stringify(await provideBoost(JSON.parse(msg.body)))
});

module.exports = {
  provideBoostHandler
};
