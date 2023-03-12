import React from 'react';
import PropTypes from 'prop-types';
import AdminUserListComponent from './AdminUserListComponent';

export default function AdminListUsers({ users, handleUser }) {
  return (
    <table className="app-admin-manage__users-list">
      <thead>
        <tr>
          <th className="app-admin-manage__users-list-item-header">Item</th>
          <th className="app-admin-manage__users-list-item-header">Nome</th>
          <th className="app-admin-manage__users-list-item-header">Email</th>
          <th className="app-admin-manage__users-list-item-header">Tipo</th>
          <th className="app-admin-manage__users-list-item-header">Excluir</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, index) => (
            <AdminUserListComponent
              key={ `${index}-${user.name}` }
              id={ user.id }
              email={ user.email }
              index={ index }
              name={ user.name }
              role={ user.role }
              handleUser={ handleUser }
            />
          ))
        }
      </tbody>
    </table>
  );
}

AdminListUsers.propTypes = {
  users: PropTypes.number.isRequired,
  handleUser: PropTypes.string.isRequired,
};
