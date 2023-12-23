import Navbar1 from "./componentsnav/Navbar1";
import Navbar2Center from "./componentsnav/Navbar2CenteredSearch";
import Navbar3Dark from "./componentsnav/Navbar3Dark";
import Navbar5 from "./componentsnav/Navbar5";
import Navbar6 from "./componentsnav/Navbar6";
import Navbar7 from "./componentsnav/Navbar7";
import NavbarQucikAction from "./componentsnav/NavbarQuickAction";
import YingKiongNavbar1 from "./componentsnav/YingKiongNavbar";





const Navbar=()=>{
    return(
        <>
        <h1>Navbar</h1>
        <Navbar1/>
        <Navbar2Center/>
        <Navbar3Dark/>
        <NavbarQucikAction/>
        <Navbar5/>
        <Navbar6/>
        <Navbar7/>
        <YingKiongNavbar1/>
        </>
    )
}
export default Navbar;