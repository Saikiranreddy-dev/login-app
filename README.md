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

