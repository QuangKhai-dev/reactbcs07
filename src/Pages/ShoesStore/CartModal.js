import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartModal extends Component {
  render() {
    console.log(this.props.cart);
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Giỏ hàng
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">tên</th>
                    <th scope="col">image</th>
                    <th scope="col">giá</th>
                    <th scope="col">số lượng</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cart.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <img width={100} src={item.image} alt="" />
                        </td>
                        <td>{item.price}</td>
                        <td>{item.soLuong}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    cart: state.product.arrCart,
  };
};

export default connect(mapStateToProp)(CartModal);
