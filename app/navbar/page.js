import Navbar1 from "./componentsnav/Navbar1";
import Navbar2Center from "./componentsnav/Navbar2CenteredSearch";
import Navbar3Dark from "./componentsnav/Navbar3Dark";
import NavbarQucikAction from "./componentsnav/NavbarQuickAction";




const Navbar=()=>{
    return(
        <>
        <h1>Navbar</h1>
        <Navbar1/>
        <Navbar2Center/>
        <Navbar3Dark/>
        <NavbarQucikAction/>
        </>
    )
}
export default Navbar;