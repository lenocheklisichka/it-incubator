import React from 'react';
import './App.css';

import Technologies from "./Technologies";
import Google from "./Google";
import Input from "./Input";
import Accordion from "./Components/Accordion";
import Rating from "./Components/Rating";
import Header from "./Header";

const App = () => {
    console.log("App Rendering")
    return (
        <div className="App">
            <Header/>
            <Technologies/>
            <Rating value={4}/>
            <Google/>
            <Input/>
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"List"} collapsed={false}/>
        </div>
    );
}

export default App;
