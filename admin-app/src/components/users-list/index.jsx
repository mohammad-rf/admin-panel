import React, { useEffect, useState } from 'react';
import styles from './users.module.css';
import api from '../../api/api.js';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      const response = await api.get('/users?page=2');
      // console.log(response.data.data);  
      setUsers(response.data.data); 
      setLoading(false); 
    } catch (err) {
      setError('Failed to load users');
      setLoading(false); 
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await api.delete(`/users/${userId}`);  
      // this fake api does not delete the user actually and i have to delete locally it in this way
      setUsers(users.filter(user => user.id !== userId));
    } catch (err) {
      console.error('Error deleting user:', err);
      setError('Failed to delete user');
    }
  }; 

  return (
    <>
    <div className={styles['users-container']}>
      <Link to={"/dashboard/new"} className={styles["add-new-button"]}>
        add new user
      </Link>
      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className={styles['error-message']}>{error}</p>
      ) : (
        <ul className={styles['users-list']}>
          {users.map(user => (
            <li key={user.id} className={styles['user-item']}>
              <div>
                <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                <div>
                  <h3>{`${user.first_name} ${user.last_name}`}</h3>
                  <p>Email: {user.email}</p>
                </div>
              </div>
              <div>
               <button onClick={() => handleDelete(user.id)}>Delete</button>
               <Link to={`/dashboard/edit/${user.id}`} >Edit</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default Users;
