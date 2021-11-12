# Subdomain

[hitachi567](https://github.com/hitachi567) <<a href="mailto:abidai790@gmail.com">abidai790@gmail.com</a>>

Express middleware for handle request from subdomain

## Requirements

- node.js
- npm or yarn

## Getting started

```bash
npm install @hitachi567/subdomain

# or

yarn add @hitachi567/subdomain
```

## Usage

```javascript
import subdomain from '@hitachi567/subdomain';
import express from 'express';

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('subdomain offset', 3); // mydomain.tld.com
app.set('subdomain offset', 2); // mydomain.com
app.set('subdomain offset', 1); // localhost

app.use(subdomain(
    (req, res) => res.send(req.hostname),
    ['api', 'users']
));

app.use(subdomain(
    (req, res) => res.send(req.hostname),
    ['api', 'posts']
));

app.use(subdomain(
    (req, res) => res.send(req.hostname)
));

app.listen(5000, () => {
    console.log('Server started on http://localhost:5000')
});
```

## Links

- [https://github.com/hitachi567/subdomain](https://github.com/hitachi567/subdomain)
- [https://www.npmjs.com/package/@hitachi567/subdomain](https://www.npmjs.com/package/@hitachi567/subdomain)
