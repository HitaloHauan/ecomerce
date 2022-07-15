import React from "react"
import BasketBlack from '../../../../assets/img/basket-black.png'
import GreenShoe from '../../../../assets/img/green-shoe.png'



function Highlights() {
  

  return (
    <div className="flex flex-row max-w-[1290px] w-full bg-gray-400">
      <ul className="flex flex-row max-w-[1290px] w-full justify-center">
        <li>
          <a href="">
            <img className="h-80 w-80" src={BasketBlack} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img className="h-80 w-80" src={GreenShoe} alt="" />
          </a>
        </li>
      </ul>
    </div>
  ) 
}


export default Highlights