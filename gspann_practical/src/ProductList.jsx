import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  text-align: center;
`;

const Image = styled.img`
  height: 150px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Price = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const ProductCard = ({ product }) => {
    return (
        <Card>
            <Image src={product.image} alt={product.title} />
            <Title>{product.title}</Title>
            <Price>${product.price}</Price>
            <Button>Buy Now</Button>
        </Card>
    );
};

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => setProducts(response.data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <GridContainer>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </GridContainer>
    );
};

export default ProductList;
