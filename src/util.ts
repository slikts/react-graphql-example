const { fetch } = window;

export const Delay = (duration: number) =>
  new Promise(resolve => setTimeout(resolve, duration));

const failFetch = async () => {
  await Delay(500);
  throw Error("Simulated network failure");
};

export const simulateFail = ({
  target: { checked },
}: React.ChangeEvent<HTMLInputElement>) => {
  window.fetch = checked ? failFetch : fetch;
};

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
