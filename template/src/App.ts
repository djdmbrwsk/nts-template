export default class App {
  public async start(): Promise<void> {
    console.log('App starting...');

    const KEEP_ALIVE_SECONDS = 30;
    for (let i = 1; i <= KEEP_ALIVE_SECONDS; i++) {
      await new Promise((res) => setTimeout(res, 1000));
      console.log(`${i} second(s)`);
    }
  }

  public async stop(): Promise<void> {
    console.log('...app shutting down');
  }
}
