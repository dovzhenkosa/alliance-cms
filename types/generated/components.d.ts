import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralImageLink extends Struct.ComponentSchema {
  collectionName: 'components_general_image_links';
  info: {
    displayName: 'ImageLink';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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

export interface GeneralSeo extends Struct.ComponentSchema {
  collectionName: 'components_general_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.String;
    metaImage: Schema.Attribute.Media<'images'>;
    metaKeywords: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_home_info_blocks';
  info: {
    displayName: 'InfoBlock';
  };
  attributes: {
    items: Schema.Attribute.Component<'home.info-block-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 0;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeInfoBlockItem extends Struct.ComponentSchema {
  collectionName: 'components_home_info_block_items';
  info: {
    displayName: 'InfoBlockItem';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface HomeSpecialOffers extends Struct.ComponentSchema {
  collectionName: 'components_home_special_offers';
  info: {
    displayName: 'SpecialOffers';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.image-link': GeneralImageLink;
      'general.navigation': GeneralNavigation;
      'general.navigation-item': GeneralNavigationItem;
      'general.seo': GeneralSeo;
      'home.faq': HomeFaq;
      'home.info-block': HomeInfoBlock;
      'home.info-block-item': HomeInfoBlockItem;
      'home.promo-slide': HomePromoSlide;
      'home.special-offers': HomeSpecialOffers;
    }
  }
}
