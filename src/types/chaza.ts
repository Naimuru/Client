export interface Chaza {
  _id: string;
  owner: string;
  name: String;
  description: String;
  type: number;
  address: String;
  phone: String;
  products: string[];
  score: number;
  image: String;
  payment_method: Number[];
}

export interface ChazaCreate {
  owner: string;
  name: String;
  description: String;
  type: number;
  address: String;
  phone: String;
  image: String;
  payment_method: Number[];
}

export interface ChazaUpdate {
  owner: string;
  description: String;
  type: number;
  address: String;
  phone: String;
  payment_method: Number[];
}
