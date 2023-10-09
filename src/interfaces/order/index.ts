import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
}
