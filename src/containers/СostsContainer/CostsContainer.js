import React, { useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { deleteProduct } from "../../core/actions/costsActions";
import { productsCostsSelector } from "../../core/selectors/costsSelector";

import TableCosts from "../../components/TableCosts/TableCosts";
import Title from "../../components/Title/Title";
import ButtonCosts from "../../components/ButtonCosts/ButtonCosts";
import TextInput from "../../components/TextInput/TextInput";

import "./style.css";

const CostsContainer = ({ products, deleteProduct }) => {
  const [newProduct, handleNewProduct] = useState("");

  const addNewProduct = () => {};
  const deleteProductHandle = id => {
    deleteProduct(id);
  };
  const handleNewProductInput = () => {};
  return (
    <div className="costs">
      <div className="costs__header">
        <Title h1="Расходы" />
        <ButtonCosts title="Новости" state="info" />
      </div>
      <div className="costs__table">
        <TableCosts products={products} onClick={deleteProductHandle} />
      </div>
      <div className="costs__footer">
        <TextInput
          placeholder="Введите товар"
          type="text"
          onChange={handleNewProductInput}
        />
        <TextInput
          type="number"
          placeholder="Количество"
          onChange={handleNewProductInput}
          min={0}
          max={100}
          step="1"
        />
        <TextInput
          type="number"
          placeholder="Цена за единицу"
          onChange={handleNewProductInput}
          min={0}
          max={1000}
          step="1"
        />
        <ButtonCosts title="Добавить" state="primary" onClick={addNewProduct} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  products: productsCostsSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteProduct }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CostsContainer);
