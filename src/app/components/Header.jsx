import React from "react";
import logoExchange from '../../../image/logoExchange.png'
import searchSelect from '../../../image/search_select.png'

class Header extends React.Component {
    render() {
        return (
            <header class="header">
        <div class="navbar">
            <div class="container">
                <div class="navbar-wrap">
                        
                        <button class="logo navbar__logo-button">
                                <img src={logoExchange} alt="logo" class="logo-img"/>
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
                                <form class="searchForm">
                                <input type="text" class="searchField" placeholder="Пошук..."/>
                                <button class="searchButton" type="submit">
                                        <img src={searchSelect} class="searchImage"/>
                                </button>
                                </form>
                            </div>
                            
                           
                            
                           
                            <div class="navbar__menuItemsRight">
                                <a href="#" class="navbar__menuItems">Мова</a>
                               
                                <a href="#" class="navbar__menuItems">Ввійти</a> 
                               
                                <a href="#" class="navbar__menuItems">Зареєструватись</a>
                               
                            </div>
                           
                </div>
                
            </div>
            
        </div>
        
        <div class="description">
            <h1 class="description__title">
                Оренда <br/>
                аааааааааааааааааааааа<br/>аааааааааааааааааааааа<br/>аааааааааааааааааааааа<br/>аааааааааааааааааааааа<br/>аааааааааааааааааааааа
            </h1>

        </div>
        
        


        
        
        
    </header>

        );
    }
}

export default Header;
