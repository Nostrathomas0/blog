import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import { visit } from 'unist-util-visit';

function rehypeImagePosition() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'img') return;
      const src = node.properties?.src;
      if (!src || !src.includes('#')) return;

      const [cleanSrc, fragment] = src.split('#');
      node.properties.src = cleanSrc;

      const classMap = { left: 'img-left', right: 'img-right', center: 'img-center' };
      const [pos, size] = fragment.split('-');
      const classes = [];
      if (classMap[pos]) classes.push(classMap[pos]);
      if (size) classes.push(`img-${size}`);

      if (classes.length) {
        node.properties.className = [...(node.properties.className || []), ...classes];
      }
    });
  };
}

export default defineConfig({
  base: '/blog',
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeImagePosition],
    }),
  },
});