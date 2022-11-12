const { preprocessor } = require('./index');

const { markup } = preprocessor();
markup({ content: 'Hello world', filename: 'test.html' });
