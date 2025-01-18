module.exports = {
  hideAsync: () => new Promise(),
  preventAutoHideAsync: () => Promise.resolve(false),
};
