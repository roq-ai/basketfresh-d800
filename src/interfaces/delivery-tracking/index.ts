import { GetQueryInterface } from 'interfaces';

export interface DeliveryTrackingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface DeliveryTrackingGetQueryInterface extends GetQueryInterface {
  id?: string;
}
