const richard = { status: 'looking for work' };
const handler = {
	get(target, propName) {
		console.log(target);
		console.log(propName);
		return target[propName];
	}
};
const agent = new Proxy(richard, handler);
agent.status;
