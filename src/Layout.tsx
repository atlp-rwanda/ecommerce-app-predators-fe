import { ReactNode } from 'react';
import HeaderNav from './components/HeaderNav';
import { Sidebar } from './components';


function Layout(props: { children: ReactNode }) {
  return (
    <div className="w-[100%] flex flex-col md:flex-row lg:flex-row">
      <Sidebar />
      <div className="flex flex-col w-[100%]">
        <HeaderNav />
        <main>{props.children}</main> {/* Corrected */}
      </div>
    </div>
  );
}

export default Layout;
