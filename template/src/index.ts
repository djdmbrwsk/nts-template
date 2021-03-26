async function init(): Promise<void> {
  /* Optionally load some configuration here */

  /**
   * Manually import App after any config is loaded so that the tree of modules
   * that get instantiated (starting with App's imports) can assume any config
   * is ready for them.
   */
  const App = (await import('./App')).default;
  const app = new App();

  await app.start();
  await app.stop();
}

export default init().catch((err) => {
  console.log(err);
  process.exit(1);
});
