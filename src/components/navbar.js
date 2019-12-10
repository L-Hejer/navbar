import React from 'react';

function Nav(props){
    return (<ul className="dropMenu"> {props.menulist.map((el) => <li className="dropMenuItems">{el.title}
    {!el.dropdown ?null :<ul className ="dropdownList">{el.dropdown.map((el)=> <li> {el}</li>)}</ul>} </li>)} </ul>)
}



export default Nav;













