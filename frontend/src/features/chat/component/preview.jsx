const Preview = ({ code }) => {
  const srcDoc = `
    <html>
      <style>${code.css}</style>
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
