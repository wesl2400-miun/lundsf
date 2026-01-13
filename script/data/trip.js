
export class Trip {
  constructor(name, from, to, time, repeat, help) {
    this.name = name || '';
    this.from = from || '';
    this.to = to || '';
    this.time = time || '';
    this.repeat = repeat || '';
    this.help = help || '';
  }
}