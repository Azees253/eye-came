import React, { useContext } from "react";
import "./ServiesDetails.css";
import { StoreContext } from "../../context/StorageContext";

const ServiesDetails = ({ category }) => {
  const { service_items } = useContext(StoreContext);
  return (
    <div>
      {service_items.map((item, index) => {
        if (category === "All" || category === item.category) {
          return (
            <div className="servies-details">
              <img src={item.image} alt="" />
              <div className="servies-details-inside">
                <h4>
                  <span style={{ color: "rgba(6, 6, 122, 0.774)" }}>Name:</span>{" "}
                  {item.servies_name}
                </h4>
                <p>
                  <span style={{ color: "rgba(6, 6, 122, 0.774)" }}>
                    Servies:{" "}
                  </span>
                  {item.servies_charge}
                </p>
                <p>
                  {" "}
                  <span style={{ color: "rgba(6, 6, 122, 0.774)" }}>
                    Description:
                  </span>{" "}
                  {item.servies}
                </p>
                <div className="btn-btn">
                  <button>Request</button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ServiesDetails;
