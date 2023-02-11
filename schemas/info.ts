export default {
  name: 'info',
  type: 'document',
  title: 'Data',
  fields: [
    {
      name: 'contact',
      title: 'Contact info',
      type: 'document',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'telefoon',
          title: 'Telefoon nummer',
          type: 'string',
        }
      ]
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
    },
    {
      name: 'hoofdfoto',
      title: 'Grote foto',
      type: 'image'
    },
    {
      name: 'about',
      title: 'Over ons',
      type: 'document',
      fields: [
        {
          name: 'aboutus',
          title: 'Over ons beschrijving',
          type: 'array',
          of: [{type: 'block'}]
        },
        {
          title: 'Waarom voor ons kiezen',
          name: 'waarom',
          type: 'array',
          of: [{type: 'block'}]
        }
      ]
    },

    {
      title: 'Portfolio',
      type: 'array',
      name: 'portfolio',
      of: [{
        title: 'image',
        name: 'Foto',
        type: 'image',
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          }
        ]
      }]
    },
    {
      title: 'Wat wij voor u kunnen beteken',
      type: 'array',
      name: 'betekenen',
      of: [{
        title: 'image',
        name: 'Foto',
        type: 'image',
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          },
          {
            name: 'category',
            type: 'string',
            title: 'Category',
          }
        ]
      }]
    }
  ],
};
