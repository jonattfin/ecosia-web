import {rest} from 'msw';
import _ from 'lodash';

import {db} from './db';
import {httpBaseUrl} from "@/api";

export const handlers = [
  rest.get(`${httpBaseUrl}/projects`, (req, res, ctx) => {
    const json = {
      projects: db.project.getAll()
    };

    return res(
      ctx.status(200),
      ctx.json(json)
    )
  }),

  rest.get(`${httpBaseUrl}/projects/:projectId`, (req, res, ctx) => {
    const {projectId} = req.params;
    const projects = db.project.getAll();

    const json = _.find(projects, p => p.id === parseInt(projectId.toString()));

    return res(
      ctx.status(200),
      ctx.json(json)
    )
  }),

  rest.get(`${httpBaseUrl}/tags`, (req, res, ctx) => {
    const json = db.tag.getAll();

    return res(
      ctx.status(200),
      ctx.json(json)
    )
  }),

  rest.get(`${httpBaseUrl}/reports`, (req, res, ctx) => {

    const json = {
      reports: db.report.getAll()
    };

    return res(
      ctx.status(200),
      ctx.json(json)
    )
  }),

  rest.get(`${httpBaseUrl}/reports/last`, (req, res, ctx) => {
    const reports = db.report.getAll();
    return res(
      ctx.status(200),
      ctx.json(_.last(reports)),
    )
  }),

  rest.get(`${httpBaseUrl}/search`, (req, res, ctx) => {

    const searchParams = req.url.searchParams;

    const text = searchParams.get('text');
    const page = searchParams.get('page');
    const size = searchParams.get('size');

    const json = {
      page: parseInt(page || "") ,
      size: parseInt(size || ""),
      count: 20,
      searches: db.query.findMany({}).map(item => ({...item, name: `${item.name} ${text}`}))
    };

    return res(
      ctx.status(200),
      ctx.json(json),
    )
  }),
]
