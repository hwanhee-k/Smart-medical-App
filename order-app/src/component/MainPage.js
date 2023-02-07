import React from "react";
import DraggableList from "./DraggableList";
import Toggle from "./toggle";


const MainPage = ({children}) => {

    return(
        <DraggableList>
            <Toggle />
        </DraggableList>

    );
}

export default MainPage;