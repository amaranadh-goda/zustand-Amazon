
import { MdArrowDropDown } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import './searchStyels/searchBar.css'
function Search() {
    return (
        <>
            <div className=" serachBar-container input-group mb-3 ">
                <div className="input-group-prepend">
                    <span className="input-group-text " style={{ fontSize: "13px" }}>All<MdArrowDropDown style={{fontSize:"21px"}} />
                    </span>
                </div>
                {/* <input type="text" className=" serachBar form-control focus-ring   "  /> */}
                <input type="text" className="form-control"  aria-label="Search"/>
                <div className="input-group-append">
                    <span className="input-group-text bg-warning"><IoSearchSharp /></span>
                </div>
            </div>
        </>
    )
}

export default Search