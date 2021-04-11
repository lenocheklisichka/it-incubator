import React from "react";

function Header(){
    return (
        <div>
            <div className="link">
                <div>Menu</div>
                <div>
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">PRODUCT</a>
                    <a href="#">CONTACT</a>
                </div>
            </div>
        </div>
    );
}

export default Header;