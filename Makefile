test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter spec \
		--timeout 20000 \
		test.js

.PHONY: test