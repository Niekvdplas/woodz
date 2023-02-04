export default {
  name: 'info',
  type: 'document',
  title: 'Bestuur',
  fields: [
    {
      name: 'Praeses',
      type: 'string',
      title: 'Praeses',
    },
    {
      name: 'Quaestor',
      type: 'string',
      title: 'Quaestor',
    },
    {
      name: 'Abactis',
      type: 'string',
      title: 'Abactis',
    },
    {
      name: 'Assessor',
      type: 'string',
      title: 'Assessor',
    },
    {
      name: 'Mail',
      type: 'string',
      title: 'Mail abactis',
    },
    {
      name: 'bestuurjaar',
      type: 'number',
      title: 'bestuur jaar (bv 40)',
    },
    {
      name: 'Jaar',
      type: 'string',
      title: 'Welk bestuursjaar 40e = XVste',
    },
  ],
};
