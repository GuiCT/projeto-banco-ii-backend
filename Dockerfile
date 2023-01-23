FROM node:lts

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install app dependencies
RUN yarn install

# RUN yarn prisma migrate dev

EXPOSE 3344

CMD [ "yarn", "start" ]
