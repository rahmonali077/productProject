import './cart.css'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Cart = ({cart, setCart}) => {
    //Increase Quantity of Cart product
    const incqty = (product) => 
    {
        const exsit = cart.find((x) => 
        {
            return x.id === product.id 
        })
        setCart(cart.map((curElm) =>
        {
            return curElm.id === product.id ? {...exsit, qty: exsit.qty + 1} : curElm
        }))
    }

     //decrese Quantity of Cart product
    const  decqty = (product) => 
    {
        const exsit = cart.find((x) => 
        {
            return x.id === product.id 
        })
        setCart(cart.map((curElm) =>
        {
            return curElm.id === product.id ? {...exsit, qty: exsit.qty - 1} : curElm
        }))
    }
     //Remove Cart product
     const revomeproduct = (product) => 
     {
        const exsit = cart.find((x) =>
        {
            return x.id === product.id
        })
        if(exsit.qty > 0)
        {
            setCart(cart.filter((curElm) =>
            {
                return curElm.id !== product.id
            }))
        }
     }
    //Total price
    const total = cart.reduce((price, item) => price + item.qty * item.price, 0)
  return (
    <>
    <div className='cart'>
      <h3>#Cart</h3>
      {
        cart.length === 0 && 
        <>
        <div className='empty_cart'>
            <h2>Your Shopping cart is empty</h2>
            <Link to={'/shop'}><button>Shop Now</button></Link>
        </div>
        </>
      }
        <div className='container'>
            {
                cart.map((curElm) => 
                {
                    return(
                        <>
                        <div className='box'>
                            <div className='img_box'>
                                <img src={curElm.image} alt="img_box" />
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                <h4>{curElm.cat}</h4>
                                <h3>{curElm.Name}</h3>
                                <p>Price:${curElm.price}</p>
                                <p>Total:${curElm.price * curElm.qty}</p>
                            </div>
                                <div className='quantity'>
                                    <button onClick={() => incqty(curElm)}>+</button>
                                    <input type="number" value={curElm.qty} />
                                    <button onClick={() => decqty(curElm)}>-</button>
                                </div>
                                <div className='icon'>
                                    <li onClick={() => revomeproduct(curElm)}><AiOutlineClose /> </li>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        <div className='bottom'>
            {
                cart.length > 0 &&
                <>
                <div className='Total'>
                    <h4>Sub Total:${total}</h4>
                </div>
                <button>checkout</button>
                </>
            }
        </div>
    </div>
    </>
  )
}

export default Cart