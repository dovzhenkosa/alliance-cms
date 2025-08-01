import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralNavigation extends Struct.ComponentSchema {
  collectionName: 'components_general_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    item: Schema.Attribute.Component<'general.navigation-item', true>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.navigation': GeneralNavigation;
      'general.navigation-item': GeneralNavigationItem;
    }
  }
}
