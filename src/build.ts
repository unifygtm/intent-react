import esbuild from 'esbuild';

import packageJson from '../package.json';

const devDependencies = Object.keys(packageJson.devDependencies || {});

const externalDependencies = [...devDependencies, 'react'];

async function build() {
  try {
    await esbuild.build({
      entryPoints: ['./src/index.ts'],
      bundle: true,
      minify: true,
      platform: 'browser',
      target: ['es6'],
      outfile: './dist/js/index.esm.js',
      format: 'esm',
      external: externalDependencies,
    });

    await esbuild.build({
      entryPoints: ['./src/index.ts'],
      bundle: true,
      minify: true,
      platform: 'browser',
      target: ['es6'],
      outfile: './dist/js/index.cjs.js',
      format: 'cjs',
      external: externalDependencies,
    });
  } catch {
    process.exit(1);
  }
}

build();
