import React, { useState } from 'react';
// import "./style.css";
import Menu from "./menuApi";
import  MenuCard  from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [...new Set (
		Menu.map( (curElem) => {
		return curElem.category;
	})
), "All"];
console.log("This is Category:");
console.log(uniqueList);

const Restaurent = () => {

	// for managing data (state management)
	// const [state, setstate] = useState(initialState)

	const [menuData, setmenuData] = useState(Menu);
	
	const [menuList, setmenuList] = useState(uniqueList);

	// const myStyle = {color: "yellow", fontSize: "22px"}



	const filterItem = (category) => {
		// alert(category);

		if(category === "All"){
			
			setmenuData(Menu);
			return;
		}

		const updatedList = Menu.filter((curElem)=> {
			return curElem.category === category
		});

		setmenuData(updatedList);
	};

	return (
		<>

			
			<Navbar filterItem={filterItem} menuList={menuList} />
			<MenuCard menuData={menuData} />
		</>
	)
}

export default Restaurent
