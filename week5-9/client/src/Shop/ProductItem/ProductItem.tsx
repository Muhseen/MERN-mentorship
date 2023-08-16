import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Product } from '../../models';
interface props{
  prod: Product;
 }

const ProductItem = ({prod}:props): JSX.Element => {
  return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
        <Card.Title>{ prod?.name??"Poduct Name"}</Card.Title>
    <Card.Text>
          Lorem Ipsum
          <br/>
          {"$"} {prod.selling_price}
    </Card.Text>
    <Button variant="primary">Add To Cart(Not implemented</Button>
  </Card.Body>
</Card> );
};

export default ProductItem;