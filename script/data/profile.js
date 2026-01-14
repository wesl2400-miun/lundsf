
// Modelklassen för användarprofilen
export class Profile {
  constructor(fName, lName, street, code, city) {
    this.fName = fName || '';
    this.lName = lName || '';
    this.street = street || '';
    this.code = code || '';
    this.city = city || '';
  }
}