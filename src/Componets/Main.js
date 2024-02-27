import { Children } from "react";

function Main({name , city}){
    return(
        <div>This is main components

            <ul>
                <li>{name}</li>
                <li>npde</li>
                <li>react</li>
                <li>{city}</li>
                <li>javaScript</li>
            </ul>
        </div>
    )
}

export default Main;