FROM ubuntu:18.04
LABEL maintainer "Aydin Erdas <erdas001@gmail.com>"

RUN apt-get update && apt-get install -y curl tzdata mongodb

COPY mongodb.conf /etc/mongodb.conf

RUN mkdir -p /data/db && chown -R mongodb:mongodb /data

USER mongodb
WORKDIR /home/mongodb

COPY --chown=mongodb:mongodb run.sh .
RUN chmod a+x run.sh
COPY --chown=mongodb:mongodb mongo-create-admin.js .
COPY --chown=mongodb:mongodb mongo-create-express.js .

EXPOSE 27017 27018
VOLUME ["/data"]
ENTRYPOINT ["sh","./run.sh"]

#CMD ["./run.sh"]
