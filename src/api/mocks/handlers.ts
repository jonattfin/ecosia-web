import {rest} from 'msw';
import _ from 'lodash';

import {db} from './db';
import {httpBaseUrl} from "@/api";

export const handlers = [
  rest.get(`${httpBaseUrl}/projects`, (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json(db.project.findMany({}))
    )
  }),

  rest.get(`${httpBaseUrl}/tags`, (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json(db.report.findMany({}))
    )
  }),

  rest.get(`${httpBaseUrl}/reports`, (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json(db.report.findMany({}))
    )
  }),

  rest.get(`${httpBaseUrl}/reports/last`, (req, res, ctx) => {
    const reports = db.report.findMany({});
    return res(
      ctx.status(200),
      ctx.json(_.last(reports)),
    )
  }),
]
