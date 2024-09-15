import { Navigate } from 'react-router-dom';

const isAdmin = (user) => {
  const adminEmails = ['tuananhkim555@gmail.com']; // Danh sách email admin
  return adminEmails.includes(user.email);
};

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user && isAdmin(user) ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
