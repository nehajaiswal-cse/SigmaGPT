const Preview = ({ code }) => {
  const srcDoc = `
    <html>
      <style> 
       * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            display: flex;
            align-items: flex-start; /* 👈 TOP pe force */
            justify-content: flex-start; /* 👈 CENTER pe force */
            min-height: 100vh;
            overflow: hidden; /* 👈 no scroll */
          }
      ${code.css}</style>
      <body>${code.html}</body>
      <script>${code.js}<\/script>
    </html>
  `;

  return (
    <iframe
      srcDoc={srcDoc}
      title="preview"
      className="w-full h-full bg-white"
    />
  );
};
export default Preview;
