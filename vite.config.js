import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const isProduction = mode === 'production';

	return {
		plugins: [react()],

		root: '.',

		define: {
			'process.env': JSON.stringify(env),
		},

		resolve: {
			alias: {
				src: resolve(__dirname, 'src'),
			},
		},

		build: {
			outDir: 'dist',
			assetsDir: 'static',
			rollupOptions: {
				output: {
					assetFileNames: (assetInfo) => {
						if (/\.(png|jpg|gif|webp)$/i.test(assetInfo.name)) {
							return 'static/images/[name].[hash][extname]';
						}
						if (/\.(woff(2)?|eot|ttf|otf)$/i.test(assetInfo.name)) {
							return 'static/fonts/[name].[hash][extname]';
						}
						if (/\.css$/i.test(assetInfo.name)) {
							return 'static/styles/[name].[hash].css';
						}
						return 'static/assets/[name].[hash][extname]';
					},
					entryFileNames: isProduction
						? 'static/scripts/[name].[hash].js'
						: 'static/scripts/[name].js',
				},
			},
			sourcemap: isProduction ? false : 'inline',
		},

		server: {
			port: 8089,
			open: true,
			historyApiFallback: true,
		},
	};
});
