import React from 'react'

const Navbar = ( {filterItem, menuList} ) => {
    console.log("This is navbar :");
    console.log(filterItem);
    console.log(menuList);
    return (
        <>
            <nav className="row m-3">
                <div className="btn-group mx-auto">

                    {
                        menuList.map( (curElem) => {
                            return (
                                <>
                                    <button key={curElem} className="btn btn-info" onClick={ () => filterItem(curElem)}>{curElem}</button>
                                
                                </>
                            )
                        })
                    }



                    {/* <button className="btn btn-info" onClick={ () => filterItem("Breakfast")}>Breakfast</button>
                    <button className="btn btn-info" onClick={ () => filterItem("Lunch")}>Lunch</button>
                    <button className="btn btn-info" onClick={ () => filterItem("Dessert")}>Dessert</button> */}
                    {/* <button className="btn btn-info" onClick={ () => setmenuData(Menu)}>All</button> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
