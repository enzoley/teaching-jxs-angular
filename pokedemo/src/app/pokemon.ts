export class Pokemon {
  id : number;
  name : string;
  img : string;
  height : string;
  type : string;

  constructor(id: number, name: string, img: string, height: string, type: string) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.height = height;
    this.type = type;
  }
}
