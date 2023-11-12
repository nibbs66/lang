import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    optimizeDeps: {
        exclude: ['@inlang/paraglide-js']
    },
    ssr: {
        noExternal: ['@inlang/paraglide-js']
    },
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
