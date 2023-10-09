import queryString from 'query-string';
import { SupplierInterface, SupplierGetQueryInterface } from 'interfaces/supplier';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSuppliers = async (
  query?: SupplierGetQueryInterface,
): Promise<PaginatedInterface<SupplierInterface>> => {
  return fetcher('/api/suppliers', {}, query);
};

export const createSupplier = async (supplier: SupplierInterface) => {
  return fetcher('/api/suppliers', { method: 'POST', body: JSON.stringify(supplier) });
};

export const updateSupplierById = async (id: string, supplier: SupplierInterface) => {
  return fetcher(`/api/suppliers/${id}`, { method: 'PUT', body: JSON.stringify(supplier) });
};

export const getSupplierById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/suppliers/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteSupplierById = async (id: string) => {
  return fetcher(`/api/suppliers/${id}`, { method: 'DELETE' });
};
