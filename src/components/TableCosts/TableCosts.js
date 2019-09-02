import React from "react";
import { Table } from "reactstrap";

import "./style.css";

const TableCosts = ({ products, onClick }) => {
  return (
    <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Товар</th>
          <th>Количество</th>
          <th>Стоимость за ед.</th>
          <th>Всего:</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <th scope="row">{product.id}</th>
            <td>{product.title}</td>
            <td>{product.count}</td>
            <td>{product.unitCost}</td>
            <td>{product.unitCost * product.count} </td>
            <td>
              <span
                onClick={() => onClick(product.id)}
                style={{
                  color: "#900020",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                X
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableCosts;
