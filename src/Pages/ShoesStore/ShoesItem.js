import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ShoesItem extends Component {
  render() {
    const { image, name, price, id } = this.props.item;
    return (
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
          <NavLink to={`/shoes-detail/${id}`}>Chi tiết</NavLink>
        </div>
      </div>
    );
  }
}
