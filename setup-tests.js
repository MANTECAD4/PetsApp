const fs = require('fs');
const { execSync } = require('child_process');

console.log('Downloading dependences...');
execSync(
	'npm install --save-dev ' +
		[
			'@babel/core',
			'@babel/preset-env',
			'@babel/preset-react',
			'@babel/preset-typescript',
			'@testing-library/react',
			'@testing-library/jest-dom@latest',
			'@types/jest',
			'babel-jest',
			'isomorphic-fetch',
			'jest',
			'jest-environment-jsdom',
		].join(' '),
	{ stdio: 'inherit' }
);

console.log('Creating files...');

fs.writeFileSync(
	'babel.config.cjs',
	`
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
        '@babel/preset-typescript',
    ],
};
`.trimStart()
);

fs.writeFileSync(
	'jest.config.cjs',
	`
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
        '@babel/preset-typescript',
    ],
};
`.trimStart()
);

fs.writeFileSync(
	'jest.setup.js',
	`
import '@testing-library/jest-dom';
import 'isomorphic-fetch'; // Optional
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

`.trimStart()
);

console.log('Config files created uwu ✅');

const packageJsonPath = './package.json';

// Leer y parsear el package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Agregar o modificar un script personalizado
packageJson.scripts = {
	...packageJson.scripts,
	test: 'jest',
	'test:watch': 'jest --watchAll',
};

// Guardar los cambios en package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Scripts added to package.json ✅');
