// Header component using the products array to display product information

import React from "react";
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

// Product array below
let products = [
  {
    name: "Ruff Small Armchair",
    brand_name: `Moroso`,
    price: "£1,545.60",
    picture:
      "https://res.cloudinary.com/clippings/image/upload/t_big/dpr_auto,f_auto,w_auto/v1607423944/products/ruff-small-armchair-moroso-h-ruff-group-basic-based-moroso-patricia-urquiola-clippings-11487085.jpg",
  },
  {
    name: "Palette JH7 Coffee Table",
    brand_name: `&Tradition`,
    price: "£843.20",
    picture:
      "https://res.cloudinary.com/clippings/image/upload/t_big/dpr_auto,f_auto,w_auto/v1585664370/products/palette-jh7-coffee-table-tradition-jaime-hayon-clippings-11362492.jpg",
  },
  {
    name: "Lato LN9 Coffee Table",
    brand_name: `&Tradition`,
    price: "£306.40",
    picture:
      "https://res.cloudinary.com/clippings/image/upload/t_big/dpr_auto,f_auto,w_auto/v1585517339/products/lato-ln9-coffee-table-tradition-luca-nichetto-clippings-11362101.jpg",
  },
  {
    name: "Plinth Tall Side Table",
    brand_name: `MENU`, 
    price: "£699.93",
    picture:
      "https://res.cloudinary.com/clippings/image/upload/t_big/dpr_auto,f_auto,w_auto/v1566908260/products/plinth-tall-side-table-menu-norm-architects-clippings-11288484.jpg",
  },
];

// Product card component passing each value of the array through
function Product(props) {
  let productsList = props.map((product, index) =>{
  return (
    <Col key={index} index={index} >
      <Card bg='dark' className="card-deck" >
        <div className="card">
            <img
              alt={product.name}
              className="card-img-top"
              src={product.picture} />
        </div>
        <h4 className="card-title" title={product.name}>
          {product.name}
        </h4>
        <p className="card-text" title={product.brand_name}>
          {`by ${product.brand_name}`}
        </p>
        <p className="card-text">
          {`${product.price}`}
        </p>
      </Card>
    </Col>
    )});
    return productsList;
}

// Class component product card to render all products and exported to App.js
class ProductCard extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    products: products
  };
}
render() {
  let card = Product(products);
  return (
    <div>
      <Container id="content">
        <Row lg={4} md={3} sm={2}>
            {card}
        </Row>
      </Container>
    </div>
  );
}
}
export default ProductCard;