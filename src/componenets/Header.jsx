import { StyledHeader } from "./styled/Header.styled"
import { IoMdSunny } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { useContext } from "react";
import { SiteContextProvider } from "../Context/Sitecontext";
import {SiteContext} from "../Context/Sitecontext"
function Header() {
  const {themeName,handleTheme}=useContext(SiteContext)
  return (
   <>
    <StyledHeader>
        <nav>
          <ul>
            <li>
              <strong>Pico Clone</strong>
            </li>
          </ul>
          <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li>
              <span onClick={handleTheme}>
                {
                  themeName=="light"?
                <IoMoonOutline />:
                  <IoMdSunny />
                }
              </span>
            </li>
          </ul>
        </nav>
        <div className='clear-fix'></div>
      </StyledHeader>
   </>
  )
}

export default Header