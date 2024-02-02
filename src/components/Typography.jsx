import React from 'react'
import classes from './Typography.module.css'

function Typography({customStyles, variant, children}) {
    const styles = customStyles?.split(' ');
    const styleArray = styles?.map((item => {
      return classes[item];
    }))
    const styleString = styleArray?.join(' ');

    function getHtmlTag(variant) {
      let result;
  
      switch (variant) {
          case 'span':
              result = <span className={`${styleString}`}>{children}</span>;
              break;
          case 'h1':
              result = <h1 className={`${styleString}`}>{children}</h1>;
              break;
          case 'h2':
              result = <h2 className={`${styleString}`}>{children}</h2>;
              break;
          case 'h3':
              result = <h3 className={`${styleString}`}>{children}</h3>;
              break;
          case 'h4':
              result = <h4 className={`${styleString}`}>{children}</h4>;
              break;
          case 'h5':
              result = <h5 className={`${styleString}`}>{children}</h5>;
              break;
          case 'h6':
              result = <h6 className={`${styleString}`}>{children}</h6>;
              break;
          case 'p':
              result = <p className={`${styleString}`}>{children}</p>;
              break;
          default:
              result = <p className={`${styleString}`}>{children}</p>;
      }
  
      return result;
  }

  let htmlTagVariable = getHtmlTag(variant);
  console.log(variant, 'varint');
  console.log(htmlTagVariable, 'htmlTagVariable');
  console.log(styleString, 'styleString');
  return (
    htmlTagVariable
  )
}

export default Typography