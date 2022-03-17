export type DataItem = {
  num: string,
  name: string,
  count: string,
  year: string,
  shape: string,
  color: string,
  size: string,
  favorite: boolean,
};

export type DataArr = DataItem[];

export type BoolParams = {
  [name: string]: boolean;
};

export type RangeParam = {
  from: number;
  to: number;
};



