// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/username.github.io'  // Replace with your GitHub Pages repo name
    },
    // other configurations
  },
};
