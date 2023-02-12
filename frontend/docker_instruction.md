# Github Explorer App

The GithubExplorer is a Go/React application that provides access to a list of random GitHub users. The Go app imitates the backend, while the React acts as the frontend. The following instruction is how to run the React app using Docker.

## Prerequisites

- Docker must be installed and running on your machine.

### Building the Image

1. Open a terminal and navigate to the root directory of your React application.

2. Run the following command to build the Docker image:

```
docker build -t frontend .
```

This command will build an image using the Dockerfile in the current directory and tag the image with the name "frontend".

### Running the Container

1. Once the image is built, run the following command to start a container from the image:

```
docker run -p 3000:3000 frontend
```

This command maps the host machine's port 3000 to the container's port 3000, allowing you to access the application from your host machine at http://localhost:3000

### Stopping the container

To stop the container, you can use CTRL + C to stop the running container or docker container stop <container_id> if you want to stop it later.