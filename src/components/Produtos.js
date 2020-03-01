import React from 'react';
import item5 from '../images/item5.jpg';
import { render } from '@testing-library/react';

class produtos extends React.Component{
  render(){
    return(
    <div className="grid-container">
      <div className="item1">
        <img src={item5} alt="Tenis desportivos" className="images"></img>
        <h3 >Camisa Branca</h3>
        <h3>20,89 €</h3>
        <span className="cart">
          <a  href="#"><ion-icon name="cart-outline"></ion-icon></a> 
        </span> 
      </div>
      <div className="item2">
        <img src={item5} alt="Camola de Algodão" className="images"></img>
        <h3>Camisa Branca</h3>
        <h3>20,89 €</h3>
        <span className="cart">
          <a  href="#"><ion-icon name="cart-outline"></ion-icon></a>
        </span> 
      </div>
      <div className="item3">
        <img src={item5} alt=" Camisola" className="images"></img>
        <h3>Camisa Branca</h3>
        <h3>20,89 €</h3>
        <span className="cart">
          <a  href="#"><ion-icon name="cart-outline"></ion-icon></a>
        </span> 
      </div>
      <div className="item4">
        <img src={item5} alt="Novas tendencias" className="images"></img>
        <h3>Camisa Branca</h3>
        <h3>20,89 €</h3>
        <span className="cart">
          <a  href="#"><ion-icon name="cart-outline"></ion-icon></a>
        </span> 
      </div>
      <div className="item5">
        <img src={item5} alt="Novas tendencias" className="images"></img>
        <h3>Camisa Branca</h3>
        <h3>20,89 €</h3>
        <span className="cart">
          <a  href="#"><ion-icon name="cart-outline"></ion-icon></a>
        </span> 
      </div>
      <div className="item6">
        <img src={item5} alt="Novas tendencias" className="images"></img>
        <h3>Camisa Branca</h3>
        <h3>20,89 €</h3>
        <span className="cart">
          <a  href="#"><ion-icon name="cart-outline"></ion-icon></a>
        </span> 
      </div>
    </div>
    )
  }
}
export default produtos;
