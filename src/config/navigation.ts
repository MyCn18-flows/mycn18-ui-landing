import { PRODUCTS_MENU } from "./products/products";
import { RESOURCES_MENU } from "./resources/resources";

export const NAVIGATION_CONFIG = {
  links: [
    { 
      href: 'products', 
      translationKey: 'nav.products',
      drop: true,
      items: PRODUCTS_MENU
    },
    { 
      href: 'resources', 
      translationKey: 'nav.resources',
      drop: true,
      items: RESOURCES_MENU
    },
    { 
      href: 'enterprise', 
      translationKey: 'nav.enterprise',
      drop: false
    },
  ],
  cta: {
    href: 'contact',
    translationKey: 'nav.getDemo'
  },
  login: {
    href: '#',
    translationKey: 'nav.login'
  },
};