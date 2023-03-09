import React, { useEffect, useState } from 'react';
import axios from '../utils/connectionDatabase';
import AdminUserListComponent from './AdminUserListComponent';

export default function AdminListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const { token } = JSON.parse(localStorage.getItem('user'));
        const { data } = await axios.get(
          '/admin/get/userlist',
          { headers: { authorization: token } },
        );

        setUsers([...data]);
      } catch (error) {
        console.log(error);
        setUsers([]);
      }
    };

    getAllUsers();
  }, [null]);

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
            />
          ))
        }
      </tbody>
    </table>
  );
}
