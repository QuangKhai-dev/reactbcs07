import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

class ShoesDetail extends Component {
  render() {
    console.log(this.props);
    const url = window.location.href.split('/');
    const id = url[url.length - 1];
    const item = this.props.product.find((item) => item.id == id);
    return (
      <div className="container my-5">
        <h3>{item.name}</h3>
        <img src={item.image} alt="" />
        <p>{item.price}</p>
        <p>{item.description}</p>
        <button
          onClick={() => {
            // xử lí đưa dữ liệu từ component lên redux store
            this.props.addToCart(item);
          }}
          className="btn btn-dark"
        >
          Thêm Vào Giỏ Hàng
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.arrProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      const action = {
        type: 'ADDTOCART',
        payload: item,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoesDetail);
