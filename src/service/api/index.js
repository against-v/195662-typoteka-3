'use strict';

const {Router} = require(`express`);
const category = require(`./category`);
const search = require(`./search`);

const getMockData = require(`../lib/get-mock-data`);

const {
  CategoryService,
  SearchService,
} = require(`../data-service`);

const app = new Router();

module.exports = app;

(async () => {
  const mockData = await getMockData();

  category(app, new CategoryService(mockData));
  search(app, new SearchService(mockData));
})();
