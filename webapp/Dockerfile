# base image
FROM node:13.1.0-alpine

# set working directory
WORKDIR webapp

# add `/app/node_modules/.bin` to $PATH
ENV PATH webapp/node_modules/.bin:$PATH

# install and cache app dependencies
COPY webapp/package.json package.json
RUN npm install
RUN npm install react-scripts@3.2 -g 

# start app
CMD ["npm", "start"]
