import React from "react";

function Item(props) {

    const ID = props.Id;
    const Ids = ID.map((Id) => {
        <li key={Id.toString()}>{Id}</li>
    })
       
    return (
        <div>
            <ul>{Ids}</ul>
        </div>
        )
    }

export default Item;