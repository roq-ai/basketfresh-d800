const mapping: Record<string, string> = {
  accounts: 'account',
  'customer-feedbacks': 'customer_feedback',
  'delivery-statuses': 'delivery_status',
  'delivery-trackings': 'delivery_tracking',
  inventories: 'inventory',
  orders: 'order',
  'order-items': 'order_item',
  products: 'product',
  'product-categories': 'product_category',
  suppliers: 'supplier',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
