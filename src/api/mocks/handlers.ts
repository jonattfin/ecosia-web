import {rest} from 'msw';

export const handlers = [
  rest.get("projects", (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json({})
    )
  }),

  rest.get("tags", (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json({})
    )
  }),

  rest.get("reports", (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json({})
    )
  }),
]
