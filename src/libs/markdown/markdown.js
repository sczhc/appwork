var MarkdownCls = require('../../node_modules/markdown/lib/markdown.js');

var markdown = {
  Markdown: MarkdownCls,
  parse: MarkdownCls.parse,
  toHTML: MarkdownCls.toHTML,
  toHTMLTree: MarkdownCls.toHTMLTree,
  renderJsonML: MarkdownCls.renderJsonML
};

export { markdown };
