install:
	npm ci

lint: 
	npx eslint .

jest:
	NODE_OPTIONS=--experimental-vm-modules npx jest