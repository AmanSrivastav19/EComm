import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './Components/App';
 import MaincategoryContextProvider from './Store/MaincategoryContextProvider';


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
    <MaincategoryContextProvider>

     <App/>
    </MaincategoryContextProvider>
    </>
)