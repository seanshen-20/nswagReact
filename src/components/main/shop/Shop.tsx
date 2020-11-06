import React, { useEffect } from "react";
import { Container, Header, Card } from "semantic-ui-react";
import { RootState } from "../../../redux";
import { bindActionCreators, Dispatch } from "redux";
import { loadProducts } from "../../../redux/modules/products";
import { connect } from "react-redux";
import { ProductCard } from "./ProductCard";

const mapStateToProps = (state: RootState) => ({
  products: state.products.products,
  loading: state.products.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      loadProducts,
    },
    dispatch
  )
};

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

// when loading, do not take new income products and add them to array 
// take the first call 
const UnconnectedShop: React.FC<Props> = ({ loadProducts, products, loading }) => {
  useEffect(() => {
    if (products.length === 0 && !loading) {
      loadProducts();
    }
  }, [loadProducts, products, loading]);

  return (
    <Container>
      <Header as="h2">Shop</Header>
      <Card.Group>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Card.Group>
    </Container>
  );
};

export const Shop = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedShop);
