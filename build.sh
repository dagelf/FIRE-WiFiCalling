rm FIRE-WiFiCalling.tar; tar cf FIRE-WiFiCalling.tar  --owner=1000 --group=1000 --exclude-from=.dockerignore
# todo - build android sdk tar 
docker build -t fire-build-img .
docker run --name fire-build -ti fire-build-img
#docker run --name fire-build -v android-sdk:/opt/android-sdk/linux -ti fire-build-img
docker cp fire-build:/home/fire/platforms/android/build/outputs/apk/*.apk .
echo docker rm fire-build\; docker rmi fire-build \# to clean up
echo docker run -ti fire-build /bin/bash to debug 
