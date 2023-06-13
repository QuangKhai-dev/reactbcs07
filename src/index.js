import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import ThongTin from './DataBinding/ThongTin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Header /> */}
    {/* <Body /> */}
    {/* <Footer /> */}
    <ThongTin />
  </>
);
