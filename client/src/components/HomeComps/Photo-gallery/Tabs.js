import React from 'react';
import Button from 'react-bootstrap/Button';

function Tabs({filterCategory, tabsData}){
    return(
        <>

 <div className="text-center my-2">
 {
 tabsData.map((category, index)=>{
      return (
        <Button className='mx-1 my-3 text-capitalize' variant="light" style={{border: "1px solid black", boxShadow:"0 1px 2px rgba(0,0,0,0.2)"}} onClick={()=> filterCategory(category) } key={index}>{category}</Button>
      )
 })
 }


</div>
        </>
    )
}

export default Tabs;