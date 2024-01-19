import React from "react";
   
function Footer(){
    const date= new Date();
    const d = date.getFullYear();
    return (
        <footer> Copyright @{d} </footer>
    )
}
    export default Footer;