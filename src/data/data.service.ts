import data from "./data";
import { DataArr, DataItem } from "./dataTypes";


export class DataService {

  public data: DataArr = data;

  private text = '';

  public getData(): DataArr {
    return data.filter((item: DataItem) => item.name.toLowerCase().includes(this.text.toLowerCase()))
  }


  public searh(text: string): void {
    this.text = text;
  }

}
