import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common/Button';

import {
  useProductState,
  usePackState,
  useModalState
} from '../../../global-state';

export default function Details() {

  const { productState } = useProductState();
  const { productDetails } = productState;
  const { packActions } = usePackState();
  const { addItemToPack } = packActions;
  const { modalActions } = useModalState();
  const { openModal } = modalActions;

  const { id, title, img, price, manufacturer, info, inPack, category, count, quantity } = productDetails;
  return (
    <div className="container py-5">

      <div className="row">
        <div className="col-10 mx-auto text-center text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>

      <div className="row">

        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} alt="Product" className="img-fluid" />
        </div>

        <div className="col-10 mx-auto col-md-6 my-3">
          <h4 className="text-title text-muted mt-3 mb-2">
            MAKE: {manufacturer}
          </h4>
          <h3>TYPE: {category}</h3>

          <h4 className="text-blue">
            <strong>
              PRICE: <span>$</span>
              {price}
            </strong>
          </h4>
          <h4>Quantity remaining: {inPack ? (quantity - count) : quantity}</h4>
          <div>
            <Link to="/">
              <Button>Return to Shop</Button>
            </Link>
            <Button
              pack
              disabled={inPack}
              onClick={() => {
                addItemToPack(id);
                openModal(id);
              }}
            >
              {inPack ? 'In Pack' : 'Add to pack'}
            </Button>
          </div>
          <p className="font-weight-bold mt-3 mb-0">
            PRODUCT SUMMARY:
          </p>
          <p className="text-muted lead">{info}</p>
        </div>
      </div>

    </div>
  );
}
