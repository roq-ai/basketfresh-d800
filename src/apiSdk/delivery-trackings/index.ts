import queryString from 'query-string';
import { DeliveryTrackingInterface, DeliveryTrackingGetQueryInterface } from 'interfaces/delivery-tracking';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDeliveryTrackings = async (
  query?: DeliveryTrackingGetQueryInterface,
): Promise<PaginatedInterface<DeliveryTrackingInterface>> => {
  return fetcher('/api/delivery-trackings', {}, query);
};

export const createDeliveryTracking = async (deliveryTracking: DeliveryTrackingInterface) => {
  return fetcher('/api/delivery-trackings', { method: 'POST', body: JSON.stringify(deliveryTracking) });
};

export const updateDeliveryTrackingById = async (id: string, deliveryTracking: DeliveryTrackingInterface) => {
  return fetcher(`/api/delivery-trackings/${id}`, { method: 'PUT', body: JSON.stringify(deliveryTracking) });
};

export const getDeliveryTrackingById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/delivery-trackings/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteDeliveryTrackingById = async (id: string) => {
  return fetcher(`/api/delivery-trackings/${id}`, { method: 'DELETE' });
};
