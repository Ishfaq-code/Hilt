.PHONY: up down build logs ps restart clean

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

clean:
	docker compose down --volumes
