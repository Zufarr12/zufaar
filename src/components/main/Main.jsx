import  './main.css'
import zufar from '../../../public/zufar'
function Main() {
  return (
    <div>
      <div className="ona">
        <h2>Products</h2>
        <h3>Move All To Bag</h3>
      </div>
      <div className="ota">
        {zufar.map((o,i)=>{
            return<div className="card" key={i}>
            <img src={o.img} alt="" />
            <h2><i class="fa-solid fa-cart-shopping"></i>Add To Cart</h2>
            <h3>{o.name}</h3>
            <h4>${o.price}</h4>
        </div>
        
        })}
      </div>
    </div>
  )
}

export default Main

