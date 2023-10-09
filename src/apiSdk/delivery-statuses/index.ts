import queryString from 'query-string';
import { DeliveryStatusInterface, DeliveryStatusGetQueryInterface } from 'interfaces/delivery-status';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDeliveryStatuses = async (
  query?: DeliveryStatusGetQueryInterface,
): Promise<PaginatedInterface<DeliveryStatusInterface>> => {
  return fetcher('/api/delivery-statuses', {}, query);
};

export const createDeliveryStatus = async (deliveryStatus: DeliveryStatusInterface) => {
  return fetcher('/api/delivery-statuses', { method: 'POST', body: JSON.stringify(deliveryStatus) });
};

export const updateDeliveryStatusById = async (id: string, deliveryStatus: DeliveryStatusInterface) => {
  return fetcher(`/api/delivery-statuses/${id}`, { method: 'PUT', body: JSON.stringify(deliveryStatus) });
};

export const getDeliveryStatusById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/delivery-statuses/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteDeliveryStatusById = async (id: string) => {
  return fetcher(`/api/delivery-statuses/${id}`, { method: 'DELETE' });
};
