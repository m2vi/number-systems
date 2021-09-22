export enum Systems {
  binary = 2,
  octal = 8,
  decimal = 10,
  hexadecimal = 16,
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

export const systems = ['binary', 'octal', 'decimal', 'hexadecimal'];
