import React from 'react';
import Navbar from './navbar/Navbar';


const Layout =({children, img}) =>{
    return(
        <>
        <div>
            <Navbar />
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;