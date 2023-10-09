import { GetQueryInterface } from 'interfaces';

export interface DeliveryStatusInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface DeliveryStatusGetQueryInterface extends GetQueryInterface {
  id?: string;
}
