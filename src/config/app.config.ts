interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Customer'],
  customerRoles: ['Guest'],
  tenantRoles: ['Customer'],
  tenantName: 'Account',
  applicationName: 'basketfresh',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read product information', 'Read delivery status', 'Read customer feedback', 'View inventory'],
  ownerAbilities: ['View product categories', 'Track delivery status', 'Provide feedback', 'Place orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/4127b54a-950b-48ca-a2dd-b41762430ce0',
};
