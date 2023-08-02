import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Root = () => {
     return (
          <>
               <Navbar />
               <main>
                    <div className="flex flex-col">
                         <Outlet />
                    </div>
               </main>
               <Footer />
          </>
     )
}

export default Root
