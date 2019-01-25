export type Serious = {
  1: string;
};

export type LOL = {
  1: string;
};
export type Excuses = {
  serious: Serious;
  lol: LOL;
};

export const excuses: Excuses = {
  serious: {
    1: 'I gotta go to the denist :(',
  },
  lol: {
    1: "I don't actually like you. Never have.",
  },
};
