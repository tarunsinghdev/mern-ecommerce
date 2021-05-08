import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, listUsers } from '../store/actions/userActions';
import { Button, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, error, users } = useSelector((state) => state.userList);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success: successDelete } = useSelector((state) => state.userDelete);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push('/login');
    }
  }, [userInfo, dispatch, history, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: 'green' }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListScreen;
