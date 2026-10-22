.PHONY: up down build logs ps restart seed clean

up:
	docker compose up --build

build:
	docker compose build

down:
	docker compose down

logs:
	docker compose logs -f

ps:
	docker compose ps

restart:
	docker compose restart

seed:
	docker compose run --rm backend npm run seed

clean:
	docker compose down --volumes
