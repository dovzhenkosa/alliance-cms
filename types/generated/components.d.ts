import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralNavigation extends Struct.ComponentSchema {
  collectionName: 'components_general_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    items: Schema.Attribute.Component<'general.navigation-item', true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface GeneralNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_general_navigation_items';
  info: {
    displayName: 'NavigationItem';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomePromoSlide extends Struct.ComponentSchema {
  collectionName: 'components_home_promo_slides';
  info: {
    displayName: 'PromoSlide';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.navigation': GeneralNavigation;
      'general.navigation-item': GeneralNavigationItem;
      'home.promo-slide': HomePromoSlide;
    }
  }
}
