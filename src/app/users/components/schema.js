export const userFormSchema = {
  name: 'User Form',
  id: 'userForm',
  fields: [
    {
      type: 'input',
      id: 'firstName',
      label: 'First Name',
      placeholder: 'First Name',
      validation: {},
      colSpan: 12,
    },
    {
      type: 'input',
      id: 'lastName',
      label: 'Last Name',
      placeholder: 'Last Name',
      validation: {},
      colSpan: 12,
    },
    {
      type: 'number',
      id: 'phone',
      label: 'Phone Number',
      placeholder: 'Phone Number',
      validation: {},
      colSpan: 12,
    },
    {
      type: 'select',
      id: 'role',
      label: 'Role',
      optionsId: 'ROLES',
      placeholder: 'Role',
      validation: {},
      colSpan: 12,
    },
  ]
}