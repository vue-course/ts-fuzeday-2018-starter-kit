import Client from 'shopify-buy';
import {shopify as config} from '../../config';

export const shopify = Client.buildClient(config);
