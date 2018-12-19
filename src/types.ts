export interface Rate {
  code: string;
  rate: number;
}

export interface RatePayload {
  data: {
    base: string;
    date: string;
    rates: Rate[];
  };
}
