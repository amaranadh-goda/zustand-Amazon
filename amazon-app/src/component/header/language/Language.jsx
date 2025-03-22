import React from 'react'
import india from '../../../assets/headerImg/india.png'
import { MdArrowDropDown } from "react-icons/md";
import './languageStyle/language.css'
function Language() {
    return (
        <>
            <div className='right-container-item-language'>
                <img src={india} className='amazonLogo' alt="india" style={{ width: "22px", height: "15px" }} />
                <span className='EN'>EN<MdArrowDropDown style={{ position: "absolute", top: "5px", fontSize: "18px" }} /></span>
            </div>
        </>
    )
}

export default Language