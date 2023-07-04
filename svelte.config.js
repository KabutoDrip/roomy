import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

const config = {
  kit: {
    adapter: adapter(),
  },
};

const preprocessOptions = {
  scss: {
    prependData: `@use 'sass:math'; @use 'sass:map'; @use 'sass:meta'; @use 'sass:string'; @use 'sass:color'; @use './static/scss/_variables.scss' as *;`,
    includePaths: ['src'],
  },
};

export default {
  ...config,
  preprocess: sveltePreprocess(preprocessOptions),
};