interface ModelBase {
  id?: string;
  created_at?: Date;
  update_at?: Date;
}

export interface Like extends ModelBase {
  lat: number;
  lon: number;
  send_user_id: string;
  receive_user_id: string;
  coordinate_id: string;
}

export interface Wear extends ModelBase {
  category: string;
  brand: string;
  price: string;
  coordinate_id?: string;
}

export interface Coordinate extends ModelBase {
  public: boolean;
  image: string;
  ble: string;
  user_id?: string;
  wears: Wear[];
}

export interface User extends ModelBase {
  ble: string;
  mail: string;
  name: string;
  gender: number;
  age: string;
  height: number;
  icon: string;
}
