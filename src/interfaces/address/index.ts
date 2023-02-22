export interface IAddress {
  id?: string;
  roadName: string;
  houseNumber: number;
  complement: string;
  city: string;
  zipCode: string;
  state: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IAddressUpdateRequest extends IAddress {}
export interface IAddressUpdateResponse extends IAddress {}
