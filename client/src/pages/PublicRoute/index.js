import React from 'react';
import Footer from "../../components/Footer"
import "../PublicRoute/public.css"

function PublicRoute() {
   return (
        <div className="public-container">
           <div className="public-text">
           <h1>Welcome!! let us help you plan your future vacation</h1>
           </div>
           <Footer />
        </div>
    );

}

export default PublicRoute