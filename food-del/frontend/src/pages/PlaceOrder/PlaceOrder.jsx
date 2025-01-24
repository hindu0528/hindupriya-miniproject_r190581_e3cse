
import React, { useContext, useState, useEffect } from 'react';
import './PlaceOrder.css'; // Ensure this path is correct
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  // Load form data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  // Save form data to localStorage whenever it changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(data => {
      const updatedData = { ...data, [name]: value };
      localStorage.setItem('formData', JSON.stringify(updatedData));
      return updatedData;
    });
  }

  const placeOrder = async (event) => {
    event.preventDefault();

    try {
      const orderItems = food_list.map(item => {
        if (cartItems[item._id] > 0) {
          return { ...item, quantity: cartItems[item._id] };
        }
        return null;
      }).filter(item => item !== null);

      if (orderItems.length === 0) {
        alert("No items in the cart to place an order.");
        return;
      }

      const orderData = {
        address: data,
        items: orderItems,
        amount: getTotalCartAmount() + 2
      }

      console.log("Order Data:", orderData);

      const response = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } });

      if (response.data.success) {
        // Clear form data from localStorage when order is placed successfully
        localStorage.removeItem('formData');
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error placing order: " + response.data.message);
      }
    } catch (error) {
      console.error("Error placing order:", error.response ? error.response.data : error.message);
      alert("An error occurred while placing your order. Please try again later.");
    }
  }

  const navigate = useNavigate();
  useEffect(()=>{
    if(!token){
      navigate("/cart")

    }
    else if(getTotalCartAmount()===0){
      navigate("/cart")

    }

  },[token])

  

  return (
    <form className='place-order' onSubmit={placeOrder}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' required />
          <input name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' required />
        </div>
        <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder='Email address' required />
        <input name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' required />
        <div className="multi-fields">
          <input name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder='City' required />
          <input name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder='State' required />
        </div>
        <div className="multi-fields">
          <input name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' required />
          <input name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' required />
        </div>
        <input name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
