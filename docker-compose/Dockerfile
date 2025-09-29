# dockerfile before compose
# FROM node:22-alpine

# WORKDIR /app

# COPY package.json .
# COPY package-lock.json .

# RUN npm install

# COPY . .

# RUN npx prisma generate
# RUN npx prisma migrate dev --name init --skip-seed --preview-feature

# RUN npm run build

# EXPOSE 3000

# CMD ["npm", "start"]

# dockerfile after compose

FROM node:22-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD npx prisma migrate dev --name init && npm start
