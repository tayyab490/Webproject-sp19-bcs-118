import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';

import Tabs from "./Tabs";
import Items from "./Items";
import Data from "./Data";
import Container from "react-bootstrap/esm/Container";

function Gallery(){
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });
    const tabsData= ["all", ...new Set(categoryData)];
    
    const filterCategory=(category) =>{
        if(category==="all"){
            setData(Data);
            return;
        }
       const filteredData =  Data.filter((value)=>{
           return value.category === category;
       })
       setData(filteredData);
    }
    return(
        <Container>
        <div className="row">
            <div className="col-sm-1">
            </div>
            <Nav variant="pills" defaultActiveKey="#first">
            <div className="col-sm-12">
                    <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
                    <Items data={data} />
            </div>
            </Nav>
            <div className="col-sm-1">
                
            </div>
        </div>
        </Container>
    )
}
export default Gallery;