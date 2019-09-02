import React from "react";
import { Table } from "reactstrap";

const TableCosts = () => {
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
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableCosts;
