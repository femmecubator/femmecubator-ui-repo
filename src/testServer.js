import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('http://local.femmecubator.com:3000', (_req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get('http://localhost/api/commonMenu', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          data: {
            headers: [
              { id: 1, label: 'Home', href: '/' },
              { id: 2, label: 'Listings', href: '/listings' },
              { id: 3, label: 'Mentors', href: '/mentors' },
              { id: 4, label: 'Get Involved', href: '/get-involved' },
              { id: 5, label: 'Notifications', href: '/notifications' },
              { id: 7, label: 'Settings', href: '/settings' },
              { id: 8, label: 'Log Out', href: '/logout' },
            ],
            role_id: 1,
            title: 'UX Designer',
            userName: 'Jane D.',
          },
        },
      })
    );
  }),

  rest.get('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: 'You must add request handler.' })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
