import App from './App.demo2.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;