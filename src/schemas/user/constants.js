const permissions = [
  'create_product',
  'edit_product',
  'delete_product',
  'generate_ticket',
  'validate_ticket',
  'report_ticket',
  'edit_profle'
]

const roles = [
  {
    client: {
      permissions: [
        permissions[4],
        permissions[5],
        permissions[6]
      ],
      tickets: []
    },
  },
  {
    admin: {
      parmissions: permissions,
    }
  }
];

const status = ['ok', 'pending', 'infractor'];

module.exports = ({
  permissions,
  roles,
  status
});