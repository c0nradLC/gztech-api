IMAGE := gztech-api
VERSION := 1.0.0

build:
	docker build -t ${IMAGE}:latest -t ${IMAGE}:${VERSION} .