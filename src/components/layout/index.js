import React from 'react';
// import Route from '../Routes';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from '../sidebar/index';

const Adminlayout = ({ children }) => {
  
  return (
    <div className='layout'>
      <Route render={(props) => <Sidebar {...props} />} />
      <div className='layout_content'>
      <div className='layout_content-main'>{children}</div>
      </div>
    </div>
  );
};

export default Adminlayout;

// import { render } from '@testing-library/react';
// const Layout = () => {
//   return (
//     <BrowserRouter>
//       <Route
//         render={(props) => (
//           <div className='layout'>
//             <Sidebar {...props} />
//             <div className='layout_content'>
//               <div className='layout_content-main'>
//                 <Routes />
//               </div>
//             </div>
//           </div>
//         )}
//       />
//     </BrowserRouter>
//   );
// };
// export default Layout;
