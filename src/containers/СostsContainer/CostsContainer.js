import React, { useState } from "react";

import TableCosts from "../../components/TableCosts/TableCosts";
import Title from "../../components/Title/Title";
import ButtonCosts from "../../components/ButtonCosts/ButtonCosts";

import "./style.css";

const CostsContainer = () => {
  const [newProduct, handleAddNewProduct] = useState("");

  const addNewProduct = () => {
    handleAddNewProduct()
  };
  const deleteProduct = () => {};

  return (
    <div className="costs">
      <div className="costs__header">
        <Title h1="Расходы"></Title>
        <ButtonCosts title="Новости" state="info" />
      </div>
      <div className="costs__table">
        <TableCosts></TableCosts>
      </div>
      <div className="costs__footer">
        <ButtonCosts title="Удалить" state="danger" onClick={addNewProduct} />
        {/* <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" /> */}
        <ButtonCosts title="Добавить" state="primary" onClick={deleteProduct} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  // filterMovie: getFilterMovieSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CostsContainer);
