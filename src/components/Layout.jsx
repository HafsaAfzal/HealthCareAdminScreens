
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';


function Layout() {
  return (
    // <div className="layout">
    //   <SideBar />
    //   {/* <Header></Header> */}
    //   <main className="main-content">
    //     <Outlet />  {/* This is where the routed components will be rendered */}
    //   </main>
    // </div>

    <div className="div">
     
      <div className="div-2">
        <SideBar></SideBar>
        
          <Outlet/>
       
        
      </div>
    </div>
  );
}

export default Layout;
