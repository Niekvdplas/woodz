
export interface asset {
  _ref: 'string',
  _type: 'string'
}

export interface image {
    _key?: string,
    _type: string,
    asset: asset
    category?: 'string',
    caption?: 'string'
}

export interface Info {
  _id: string;
  _createdAt: string;
  about: {
    _type: string;
    aboutus: Array;
    waarom: Array;
  }
  betekenen: [
    image
  ]
  contact: {
    email: string;
    telefoon: string;
  }
  hoofdfoto: {
    _type: string,
    asset: image
  },
  logo: {
    _type: string,
    asset: image
  },
  portfolio:{

  }
}