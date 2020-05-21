import React from 'react';
import Footer from "../../components/Footer"
import "../PublicRoute/public.css"

function PublicRoute() {
   return (
        <div className="public-container">
           <div className="public-text">
           <h1>Welcome!! Use This Itinerary To Help Budget Your Next Vacation</h1>
           </div>
           <Footer />
        </div>
    );

}

export default PublicRoute