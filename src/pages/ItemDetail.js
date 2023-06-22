import React, { Component } from 'react';

export default class ItemDetail extends Component {
  render() {
    let searchParams = new URLSearchParams();
    console.log(searchParams.get('id'));
    return <div>ItemDetail</div>;
  }
}
