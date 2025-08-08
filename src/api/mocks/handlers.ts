import {http, HttpResponse} from 'msw';
import _ from 'lodash';

import {db} from './db';
import {httpBaseUrl} from "@/api";

export const handlers = [
  http.get(`${httpBaseUrl}/projects`, ({request}) => {
    const json = {
      projects: db.project.getAll()
    };

    return HttpResponse.json(json);
  }),

  http.get(`${httpBaseUrl}/projects/:projectId`, ({params}) => {
    const {projectId} = params;
    const projects = db.project.getAll();

    const json = _.find(projects, p => p.id === parseInt(projectId as string));

    return HttpResponse.json(json);
  }),

  http.get(`${httpBaseUrl}/tags`, ({request}) => {
    const json = db.tag.getAll();

    return HttpResponse.json(json);
  }),

  http.get(`${httpBaseUrl}/reports`, ({request}) => {

    const json = {
      reports: db.report.getAll()
    };

    return HttpResponse.json(json);
  }),

  http.get(`${httpBaseUrl}/reports/last`, (req) => {
    const reports = db.report.getAll();
    return HttpResponse.json(reports);
  }),

  http.get(`${httpBaseUrl}/search`, ({request}) => {

    const url = new URL(request.url);

    const text = url.searchParams.get('text');
    const page = url.searchParams.get('page');
    const size = url.searchParams.get('size');

    const json = {
      page: parseInt(page || "") ,
      size: parseInt(size || ""),
      count: 20,
      searches: db.query.findMany({}).map(item => ({...item, name: `${item.name} ${text}`}))
    };

    return HttpResponse.json(json);
  }),
]
