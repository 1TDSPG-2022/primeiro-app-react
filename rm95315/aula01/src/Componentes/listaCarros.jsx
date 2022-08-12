import React from "react";

export default function ListaCarros(props){
    return(
        <ul>
            <li><img src="{props.cars[0]}" alt="" /></li>
            <li><img src="{props.cars[1]}" alt="" /></li>
            <li><img src="{props.cars[2]}" alt="" /></li>
            <li><img src="{props.cars[3]}" alt="" /></li>
        </ul>
    )
}