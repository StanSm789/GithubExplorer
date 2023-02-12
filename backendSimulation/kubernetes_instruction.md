# The Galaxy Names App

TheGalaxyNames is a Go application that provides access to a list of random GitHub users.

## Prerequisites

- Install Minikube: Minikube is a tool that makes it easy to run a single-node Kubernetes cluster locally.
- Install Docker: Minikube uses Docker to manage the containers.

### Start the Cluster

1. Open your terminal and navigate to the directory where you have your yaml file.

2. Run the following command:

```
minikube start --driver docker
```

This command will start a Minikube cluster.

### Verify the Cluster Status

1. Run the following command to check the status of the Minikube cluster:

```
minikube status
```

### Deploy the Backend

1. Run the following command to deploy the backend:

```
kubectl apply -f backend.yaml
```

### Access the Backend from the browser

1. Run the following command to get the IP address of the Minikube cluster:

```
minikube ip
```

2. Open your browser and access the backend using the following URL:

```
<Minikube IP>:<NodePort>
```

Please note that there might be a small delay before the application starts functioning properly when accessing the URL.

### Access the Backend using Minikube Service

If you can't access the NodePort service backend with Minikube IP: NodePort, execute the following command:

```
minikube service backend-service
```

### Stop the Cluster

1. Run the following command to stop the Minikube cluster:

```
minikube stop
```

### Delete the Cluster

1. Run the following command to delete the Minikube cluster:

```
minikube delete
```
