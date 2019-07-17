import React from "react";
import logoExchange from '../../../image/logoExchange.png'
import searchSelect from '../../../image/search_select.png'
import Form from "./Form.jsx";
import { Link } from "react-router-dom";
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";
import FormInput from "./FormInput.jsx"
import FormRegistration from "./FormRegistration.jsx"
import classNames from "classnames";
import bcIMG from '../../../image/bcIMG.jpg'
import exchangelogo from '../../../image/exchange-logo.png'
import { Menu, Dropdown, Icon } from 'antd';
import { Input } from 'antd';

const { Search } = Input;


const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">Українська</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">Русский</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="#">English</a>
    </Menu.Item>
  </Menu>
);

class Header extends React.Component {
    handleClick = () => {
    }

    render() {
        return (
            
            <header className="header">
        <div className="navbar">
            <div className="container">
                <div className="navbar-wrap">
                        
                        <button className="logo navbar__logo-button">
                                <img src={logoExchange} alt="logo" className="logo-img"/>
                            </button>
                            <div className="navbar__menuNavbar">
                                <ul className="navbar__selektor">
                                    <li className="navbar__menuItemsPosition"><Link to="/homePage" className="navbar__menuItems">Home</Link></li>
                                    <li className="navbar__menuItemsPosition"><Link to="/about" className="navbar__menuItems">About</Link></li>
                                    <li className="navbar__menuItemsPosition"><Link to="/topics" className="navbar__menuItems">Topics</Link></li>
                                    <li className="navbar__menuItemsPosition"><Link to="/aaa" className="navbar__menuItems">HeHeHe</Link></li>
                                </ul>
                                
                            </div>
                            <div className="search">
                            <form className="searchForm">
                            {/* <input type="text" className="searchField" placeholder="Пошук..."/>
                                <button className="searchButton" type="submit">
                                        <img src={searchSelect} className="searchImage"/>
                                </button> */}
                            <Search className="searchField" placeholder="Пошук" onSearch={value => console.log(value)} enterButton />
                            </form>
                            </div>

                           
                            <div className="navbar__menuItemsRight">
                            <Dropdown overlay={menu} trigger={['click']}>
                                <a className="ant-dropdown-link navbar__menuItems" href="#">
                                    Мова <Icon type="down" />
                                </a>
                            </Dropdown>,

                                <Link to="/formInput" className="navbar__menuItems" id="inBtn" onClick={this.handleClick=()=>(showLogin('block'))}>Ввійти</Link>
                                <Link to="/formRegistration"  className="navbar__menuItems" id="registrBtn" onClick={this.handleClick=()=>(showRegister('block'))}>Зареєструватись</Link>
                                
                               
                            </div>
                           
                </div>
                
            </div>
            
        </div>
        <FormInput/>
        <FormRegistration/>
        <div className="description">
        <div className="container">
            <div className="descriptionStaff">
            <h1 className="descriptionTitle">
                Оренда <br/>
                аааааааааааааааааааааа аааааааааааааааааааааа аааааааааааааааааааааа аааааааааааааааааааааа аааааааааааааааааааааа
            </h1>
            <div className="exchangelogo"><img src={exchangelogo} id="mainLogo"/></div>
            </div>
            </div>
        </div>
        
        


        
        
        
    </header>

        );
    }
}

export default Header;
