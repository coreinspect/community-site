import Header from './Header';
import PropTypes from 'prop-types';
import './css/mainlayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired, // Validate that `children` is required
};

export default MainLayout;
