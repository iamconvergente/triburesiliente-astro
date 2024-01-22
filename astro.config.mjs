import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: true
	},
	outDir: './dist',
	publicDir: './public',
	srcDir: './src',
	prefetch: true,
	integrations: [],
	trailingSlash: 'always',

	vite: {
		clearScreen: true,
		appType: 'custom',
		logLevel: 'info',
		css: {
			devSourcemap: true,
			modules: {
				generateScopedName: '[name]__[local]___[hash:base64:5]'
			}
		},
		optimizeDeps: {
			exclude: ['@astrojs/astro'],
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.json']
		}
	},

	build: {
		format: 'directory'
	},
	server: {
		port: 4321,
		open: true
	}
});
