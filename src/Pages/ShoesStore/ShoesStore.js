import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoesItem from './ShoesItem';

class ShoesStore extends Component {
  render() {
    console.log(this.props);
    // gọi tới dữ liệu arrProduct trên store để map ra các sản phẩm
    return (
      <div className="container">
        <h1>Bài tập redux tạo giỏ hàng</h1>
        <div className="row">
          {this.props.product.arrProduct.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <ShoesItem item={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

// kết nối với redux
const mapStateToProps = (state) => {
  // return giúp lấy dữ liệu từ store
  return {
    product: state.product,
  };
};

export default connect(mapStateToProps)(ShoesStore);
