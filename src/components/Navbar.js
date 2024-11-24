import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FireValid from "./Firevalidation";


const Navbar = (presentUser)=>{
  const name = presentUser.email;

  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
    return(
      <>
        <nav class="navbar navbar-expand-lg navbar-light px-4 navbar1 ">
          <Link class="navbar-brand" to="/"><img src="https://static.cricbuzz.com/images/cb_logo.svg" width={"100px"}/></Link>
        <button className="navbar-toggler" type="button"
        onClick={toggleCollapse}
        aria-expanded={!isCollapsed} aria-label="Toggle navigation"
      >
      <span className={isCollapsed ? 'navbar-toggler-icon' : 'btn-close'}></span>
      </button>
  <div 
  className={`collapse navbar-collapse ${isCollapsed ? 'collapsed' : 'show'}`}
  >
    <ul class="navbar-nav m-auto ">
      <li class="nav-item text-light">
        <a class="nav-link  text-light" href="#">Live Scores</a>
      </li>
      <li class="nav-item">
        <a class="nav-link  text-light" href="#">Schedule</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle  text-light" href="#" >
          Dropdown
        </a>
        
      </li>
      <li class="nav-item">
        <a class="nav-link  dropdown-toggle  text-light" href="#">News
        <div className="names mt-2">
          <div className="row border bg-light ">
            <div className="col-12 text-dark  pt-2">
              <a href="#">All Stories</a><br/>
              <a href="#">Premium Editores</a><br/>
              <a href="#">Letest News</a><br/>
              <a href="#">Topics</a><br/>
              <a href="#">SportLight</a><br/>
              <a href="#">Interviews</a><br/>
              <a href="#">Live Blogs</a><br/>
              <a href="#">All Stories</a><br/>
              <a href="#">All Stories</a>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link  dropdown-toggle  text-light" href="#">Series
        <div className="names mt-2">
          <div className="row border bg-light ">
            <div className="col-12 text-dark  pt-2">
            <a href="#">India tour of Australia, 2024-25</a><br/>
              <a href="#">India tour of South Africa, 2024</a><br/>
              <a href="#">England tour of New Zealand, 2024</a><br/>
              <a href="#">England tour of West Indies, 2024</a><br/>
              <a href="#">Pakistan tour of Zimbabwe, 2024</a><br/>
              <a href="#">Womens Big Bash League 2024</a><br/>
              <a href="#">Pakistan tour of Australia, 2024</a><br/>
              <a href="#">Ranji Trophy Elite 2024-25</a><br/>
              <a href="#" className="text-primary">All Stories</a>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link  dropdown-toggle  text-light" href="#">Teams
        <div className="names mt-2">
          <div className="row border bg-light ">
            <div className="col-12 text-dark  pt-2">
              <a href="#">India</a><br/>
              <a href="#">Pakistan</a><br/>
              <a href="#">Landon</a><br/>
              <a href="#">Australia</a><br/>
              <a href="#">Neuziland</a><br/>
              <a href="#">American</a><br/>
              <a href="#">South Africa</a><br/>
              <a href="#">Africa</a><br/>
              <a href="#">All Teams</a>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link  dropdown-toggle  text-light" href="#">Videos
        <div className="names mt-2">
          <div className="row border bg-light ">
            <div className="col-12 text-dark  pt-2 hover">
              <a href="#">All Videos</a><br/>
              <a href="#">Catergories</a><br/>
              <a href="#">Playlists</a>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link  dropdown-toggle  text-light" href="#">Rankings
          <div className="names mt-2">
            <div className="row border bg-light ">
              <div className="col-12 text-dark  pt-2 hover">
               <a href="#">ICC Cricket Rankings - Men's Batting</a><br/>
              <a href="#">ICC Cricket Rankings - Women's Batting</a>
              </div>
            </div>

          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link  dropdown-toggle  text-light" href="#">More
        </a>
      </li>
      <li class="nav-item">
        <button class=" btn  btn-light text-light rounded-5 text-dark" href="#">Crickbuzz Plus</button>
      </li>
      
      <li class="nav-item ms-3">
        <a class="nav-link  text-light" href="#"><FaMagnifyingGlass/></a>
      </li>
      <li class="nav-item ms-2  ">
        <a class="nav-link  text-light" href="#">
        <FireValid/>
        </a>
      </li>
    </ul>
    
  </div>
</nav>
</>
    )
}
export default Navbar;