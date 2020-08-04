//This component is similar to our ProductItem component but instead of allowing you to add to cart,
//it allows administrators to add and remove product quantity
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import dropbg from './liquiddrops.jpg';

import {
  useProductState
} from '../../../global-state';

export default function AdminItem({ product }) {
  let { id, title, img, quantity, } = product;
  const { productActions } = useProductState();
  const { setProductDetails } = productActions;

  //declaring our add and decrease quantity variables
  const addQuant = () =>  {product.quantity++};
  const decQuant = () =>  {product.quantity--};
  return (
      <Product className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => setProductDetails(product)}
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
              <button
                className="pack-btn"
                onClick={() => {addQuant(id)}}
              >
                
                  <i className="fa fa-plus" />
              </button>
              
              <button
                className="dec-btn"
                disabled={quantity <= 0}
                onClick={() => {decQuant(id)}}
              >
                {product.quantity <= 0 ? (
                  <p className="text-capitalize m-0 p-0" disabled>
                    Out of Stock
                  </p>
                ) : (
                  <i className="fa fa-minus" />
                )}
              </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">Stock:{quantity}</span>
            </h5>
          </div>
        </div>
      </Product>
  );
}


const Product = styled.div`
  .card {
    border-color: transparent;
    transition: all 600ms linear;
    background: url("${dropbg}") repeat;
    border-radius: 35px;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 600ms linear;
    border-radius: 35px;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: var(--lightBlue);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 500ms linear;
  }
  
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .pack-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--mainYellow);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transition: all 600ms linear;
    transform: translate(100%, 100%);
  }
  .img-container:hover .pack-btn {
    transform: translate(0, 0);
  }
  .pack-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .dec-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.2rem 0.4rem;
    background: darkred;
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0 0.5rem 0 0;
    transition: all 600ms linear;
    transform: translate(100%, 100%);
  }
  .img-container:hover .dec-btn {
    transform: translate(0, 0);
  }
  .dec-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
