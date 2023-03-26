FROM node:14-alpine
WORKDIR /app
ENV AXIOS_BASE_URL=http://your-url:8000/api/
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start", "0.0.0.0:3000"]
