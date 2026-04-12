this code is practice purpose only created a login page using docker and mongo express and nodejs

pending topics : amazon ecr and volume persistance


Docker commands
1.docker pull imagename:tag 
2.docker run -p hostport:dockercontainerport -e envnumber -v hostvolum:container volume --name custom name image:tag 
3.docker start imagename/container id
4.docker stop
5.docker network
6.docker logs
7.docker exec -it /bin/bash or sh
8.docker login
9.docker push imagename:tag 
10.docker ps -a /-l
11.docker images
12.docker build -t image:tagname dockerfilename  // building from the docker image
13.docker-compose -f filename up
14.docker rm container
15.docker rmi imagename/id
16.docker images

docker compose --->
version:
services:
  dockername:
    image:
    env:
    volumes:
    ports:
    container_name:
    depends_on:
    etc...
    
docker file:---->
from base image os
env environement name
workdir home/app inside container home dir
copy sourse destination
run for running all linux commands
entrypoint starting the command when the start of conatiner
cmd[""] starting the command when the start of container 


kubernetes:=--------------------------------------------------------->
installing minikube 
New-Item -Path 'c:\' -Name 'minikube' -ItemType Directory -Force
$ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -OutFile 'c:\minikube\minikube.exe' -Uri 'https://github.com/kubernetes/minikube/releases/latest/download/minikube-windows-amd64.exe' -UseBasicParsing

$oldPath = [Environment]::GetEnvironmentVariable('Path', [EnvironmentVariableTarget]::Machine)
if ($oldPath.Split(';') -inotcontains 'C:\minikube'){
  [Environment]::SetEnvironmentVariable('Path', $('{0};C:\minikube' -f $oldPath), [EnvironmentVariableTarget]::Machine)
}

in ur terminal as run as adminstrator 
if there is any issues 
minikube start --no-vtx-check
minikube start
minikube status
minikube ssh for directly connec ting to minikube virtual box inside without password and id
kubectl get nodes for checking the working status nodes
kubectl create -h (shows all the help which can be used with create)

create minikube cluster
minikube start 
kubectl get nodes
minikube status
kubectl version

delete cluster and restart in debug mode
minikube delete
minikube start --vm-driver=hyperkit --v=7 --alsologtostderr
minikube status

kubectl commands
kubectl get nodes
kubectl get pod
kubectl get services
kubectl create deployment nginx-depl --image=nginx
kubectl get deployment
kubectl get replicaset
kubectl edit deployment nginx-depl

debugging
kubectl logs {pod-name}
kubectl exec -it {pod-name} -- bin/bash
create mongo deployment
kubectl create deployment mongo-depl --image=mongo
kubectl logs (mongo-depl-{pod-name})
kubectl describe pod (mongo-depl-{pod-name})

delete deployment

kubectl delete deployment mongo-depl
kubectl delete deployment nginx-depl

create or edit config file
vim nginx-deployment.yaml
kubectl apply -f nginx-deployment.yaml
kubectl get pod
kubectl get deployment
delete with config
kubectl delete -f nginx-deployment.yaml
#Metrics
kubectl top The kubectl top command returns current CPU and memory usage for a cluster’s pods or nodes, or for a particular pod or node if specified.
