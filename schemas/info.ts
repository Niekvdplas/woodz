export default {
  name: 'info',
  type: 'document',
  title: 'Data',
  fields: [
    {
      name: 'number',
      type: 'string',
      title: 'Telefoon nummer',
    },
    {
      name: 'about',
      type: 'text',
      title: 'Over ons',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
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
            options: {
              isHighlighted: true // <-- make this field easily accessible
            }
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
