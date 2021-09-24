export enum Systems {
  binary = 2,
  ternary = 3,
  quaternary = 4,
  quinary = 5,
  senary = 6,
  septenary = 7,
  octal = 8,
  nonary = 9,
  decimal = 10,
  undecimal = 11,
  duodecimal = 12,
  tridecimal = 13,
  tetradecimal = 14,
  pentadecimal = 15,
  hexadecimal = 16,
  heptadecimal = 17,
  octodecimal = 18,
  enneadecimal = 19,
  vigesimal = 20,
  unvigesimal = 21,
  duovigesimal = 22,
  trivigesimal = 23,
  tetravigesimal = 24,
  pentavigesimal = 25,
  hexavigesimal = 26,
  heptavigesimal = 27,
  octovigesimal = 28,
  enneavigesimal = 29,
  trigesimal = 30,
  untrigesimal = 31,
  duotrigesimal = 32,
  tritrigesimal = 33,
  tetratrigesimal = 34,
  pentatrigesimal = 35,
  hexatrigesimal = 36,
}

class From {
  constructor(private input: string) {}

  from(n: Systems) {
    return new To(this.input, n);
  }
}

class To {
  constructor(private input: string, private from: Systems) {}

  to(n: Systems) {
    const num = parseInt(this.input, this.from).toString(n);
    return num === 'NaN' ? '' : num;
  }
}

export const num = (input: string) => new From(input);
