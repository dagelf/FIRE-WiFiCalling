#tar cf FIRE-WiFiCalling.tar --exclude Dockerfile *
FROM ubuntu:latest
ENV DEBIAN_FRONTEND noninteractive
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
#bad practice but speeds up build for now so I can get something done with my limited time
RUN apt-get update
RUN apt-get -y install npm nodejs
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm install -g ionic@2.2.3
RUN npm install -g cordova
RUN apt-get install -y openjdk-8-jdk wget expect git curl unzip
RUN apt-get install -y gradle
ADD android-sdk-linux.tar.gz /
ENV ANDROID_HOME /opt/android-sdk-linux
RUN useradd -u 1000 -d /home/fire -ms /bin/bash fire
USER fire
WORKDIR /home/fire
#  rm FIRE-WiFiCalling.tar; tar cf FIRE-WiFiCalling.tar  --owner=1000 --group=1000 --exclude Dockerfile --exclude *.tar --exclude *.zip *
ADD FIRE-WiFiCalling.tar /home/fire
#USER root
#RUN chown fire:fire /home/fire -R
#USER fire
RUN npm install
CMD mkdir www && cordova platform add android --no-interactive && ionic build android 
#CMD ionic serve
