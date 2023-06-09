import React from 'react';
import PropTypes from 'prop-types';
import axios from '../utils/connectionDatabase';

export default function AdminUserListComponent({
  index, id, name, email, role, handleUser,
}) {
  console.log(index, id, name, email, role);
  const removeUser = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await axios.delete(
      `/admin/remove/user/${id}`,
      { headers: { authorization: token } },
    );
    handleUser();
  };

  return (
    <tr className="app-admin-manage__users-list__item">
      <td
        className="app-admin-manage__users-list__item-id"
        data-testid={ `admin_manage__element-user-table-item-number-${index + 1}` }
      >
        { index + 1 }
      </td>

      <td
        className="app-admin-manage__users-list__item-name"
        data-testid={ `admin_manage__element-user-table-name-${index + 1}` }
      >
        { name }
      </td>

      <td
        className="app-admin-manage__users-list__item-email"
        data-testid={ `admin_manage__element-user-table-email-${index + 1}` }
      >
        { email }
      </td>

      <td
        className="app-admin-manage__users-list__item-role"
        data-testid={ `admin_manage__element-user-table-role-${index + 1}` }
      >
        { role }
      </td>

      <td>
        <button
          className="app-admin-manage__users-list__item-rm"
          data-testid={ `admin_manage__element-user-table-remove-${index + 1}` }
          onClick={ () => removeUser() }
          type="button"
        >
          EXCLUIR
        </button>
      </td>
    </tr>
  );
}

AdminUserListComponent.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  handleUser: PropTypes.string.isRequired,
};
