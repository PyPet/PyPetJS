FROM balenalib/raspberrypi3-node:6.14.4-buster-run

LABEL maintainer="Gameme_10" \
      name="PyPetJS" \
      version="beta_0.1"


# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@4.0.3 -g

# add app
COPY . ./

# start app
CMD ["npm", "start"]