function extractCodeBlock(text) {
  const htmlMatch = text.match(/```html([\s\S]*?)```/);
  const cssMatch = text.match(/```css([\s\S]*?)```/);
  const jsMatch = text.match(/```javascript([\s\S]*?)```|```js([\s\S]*?)```/);

  return {
    html: htmlMatch ? htmlMatch[1].trim() : "",
    css: cssMatch ? cssMatch[1].trim() : "",
    js: jsMatch ? (jsMatch[1] || jsMatch[2]).trim() : "",
  };
}

module.exports = { extractCodeBlock };