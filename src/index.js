import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import ThongTin from './DataBinding/ThongTin';
import HandleEvent from './HandleEvent/HandleEvent';
import ComponentWithCss from './ComponentWithCss/ComponentWithCss';
import DemoLoi from './ComponentWithCss/DemoLoi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Header /> */}
    {/* <Body /> */}
    {/* <Footer /> */}
    <ThongTin />
    {/* <HandleEvent /> */}
    {/* <ComponentWithCss />
    <DemoLoi /> */}
  </>
);
