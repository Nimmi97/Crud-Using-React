import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';
import ProductList from './components/products/ProductList';
import NavBar from './components/header/NavBar';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/" element={<UserList />} />
      </Routes>
      <ToastContainer
        theme="colored"
        position="top-right"
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </div>
  );
};
export default App;
