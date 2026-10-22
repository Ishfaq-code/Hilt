# Hilt
COP 4331 MERN

## Run with Docker

Start the Vite development server, Express API, and MongoDB:

```sh
docker compose up --build
```

The frontend is available at <http://localhost:5173>. Vite proxies requests
under `/api` to Express, which is also available at <http://localhost:3000>.
Check `http://localhost:5173/api/health` to confirm that Express is responding
and MongoDB is connected. MongoDB data is persisted in the `mongodb_data`
volume.

To stop the services, run `docker compose down`. To also remove persisted
MongoDB data, run `docker compose down --volumes`.

Seed the database with repeatable demo users and an organization:

```sh
make seed
```

This starts MongoDB if needed and upserts the same demo records on each run.
