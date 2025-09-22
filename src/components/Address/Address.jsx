import React from "react";
import "./Address.css";

const Address = () => {
  return (
    <>
      <div>
        <form className="place-order">
          <div className="place-order-left">
            <p className="titles">Delivery Information</p>
            <div className="multi-field">
              <input
                name="firstName"
                type="text"
                placeholder="First name"
                required
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last name"
                required
              />
            </div>
            <input
              name="email"
              type="text"
              placeholder="Email Address"
              required
            />
            <input name="address" type="text" placeholder="Address" required />
            <div className="multi-field">
              <input name="city" type="text" placeholder="city" required />
              <input name="state" type="text" placeholder="state" required />
            </div>
            <div className="multi-field">
              <input
                name="zipcode"
                type="text"
                placeholder="Zip code"
                required
              />
              <input name="contry" type="text" placeholder="contry" required />
            </div>
            <input name="phone" type="text" placeholder="Phone" required />
            <button type="submit">Place Order</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Address;
