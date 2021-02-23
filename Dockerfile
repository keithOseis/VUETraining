FROM node
RUN mkdir /code
WORKDIR /code
RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/keithOseis/VUETraining .

RUN npm install
CMD ["npm","run","dev"]
