// _document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() 
  
  {
 
    return (
      <Html lang="en">
        <Head />
        <body className='dark:bg-[#18191a]'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
