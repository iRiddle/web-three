import React, { useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { NavLink } from "reactstrap";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

import { deleteProduct, addProduct } from "../../core/actions/costsActions";
import { productsCostsSelector } from "../../core/selectors/costsSelector";

import TableCosts from "../../components/TableCosts/TableCosts";
import Title from "../../components/Title/Title";
import ButtonCosts from "../../components/ButtonCosts/ButtonCosts";
import TextInput from "../../components/TextInput/TextInput";

import { getRandomId } from "../../core/utils";

import "react-notifications/lib/notifications.css";
import "./style.css";

const CostsContainer = ({ products, deleteProduct, addProduct }) => {
  const [productTitle, addProductTitle] = useState("");
  const [productCount, addProductCount] = useState(1);
  const [productCost, addProductCost] = useState(1);

  const handleProductTitle = (e, erase) => {
    if (erase) {
      return addProductTitle("");
    }
    addProductTitle(e.target.value);
  };
  const handleProductCount = (e, erase) => {
    if (erase) {
      return addProductCount(1);
    }
    addProductCount(e.target.value);
  };
  const handleProductCost = (e, erase) => {
    if (erase) {
      return addProductCost(1);
    }
    addProductCost(e.target.value);
  };

  const deleteProductHandle = id => {
    deleteProduct(id);
  };

  const handleAddNewProductInput = () => {
    if (!productTitle.length) {
      return NotificationManager.error("Введите название продукта");
    }

    addProduct({
      id: getRandomId(),
      title: productTitle,
      count: productCount,
      unitCost: productCost
    });

    eraseInputs();
  };

  const eraseInputs = () => {
    handleProductTitle("", true);
    handleProductCount(1, true);
    handleProductCost(1, true);
  };

  return (
    <div className="costs">
      <div className="costs__header">
        <Title h1="Расходы" />
        <NavLink href="/news">Новости</NavLink>
      </div>
      <div className="costs__table">
        <TableCosts products={products} onClick={deleteProductHandle} />
      </div>
      <div className="costs__footer">
        <TextInput
          placeholder="Введите товар"
          type="text"
          onChange={handleProductTitle}
          value={productTitle}
        />
        <TextInput
          type="number"
          placeholder="Количество"
          onChange={handleProductCount}
          min={1}
          max={100}
          step="1"
          value={productCount}
        />
        <TextInput
          type="number"
          placeholder="Цена за единицу"
          onChange={handleProductCost}
          min={1}
          max={1000}
          step="1"
          value={productCost}
        />
        <ButtonCosts
          title="Добавить"
          state="primary"
          onClick={handleAddNewProductInput}
        />
      </div>
      <NotificationContainer />
    </div>
  );
};

const mapStateToProps = state => ({
  products: productsCostsSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteProduct, addProduct }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CostsContainer);
