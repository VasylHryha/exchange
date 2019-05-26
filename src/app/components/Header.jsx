import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header class="header">
                <div class="navbar">
                    <div class="container">
                        <div class="navbar-wrap">

                            <button class="logo navbar__logo-button">
                                <img src="image\logoExchange.png" alt="logo" class="logo-img" />
                            </button>
                            <div class="navbar__menuNavbar">
                                <ul class="navbar__selektor">
                                    <li class="navbar__menuItemsPosition"><a href="#" class="navbar__menuItems">AAAA</a></li>
                                    <li class="navbar__menuItemsPosition"><a href="#" class="navbar__menuItems">AAAA</a></li>
                                    <li class="navbar__menuItemsPosition"><a href="#" class="navbar__menuItems">AAAA</a></li>
                                    <li class="navbar__menuItemsPosition"><a href="#" class="navbar__menuItems">AAAA</a></li>
                                </ul>

                            </div>
                            <div class="search">
                                <input type="text" class="searchField" />
                            </div>

                            <div class="navbar__menuItemsRight">
                                <a href="#" class="navbar__menuItems">Мова</a>

                                <a href="#" class="navbar__menuItems">Ввійти</a>

                                <a href="#" class="navbar__menuItems">Зареєструватись</a>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="hero">


                </div>

            </header>

        );
    }
}

export default Header;
