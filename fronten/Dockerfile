FROM nginx:1.13
RUN echo  /usr/share/nginx/html/index.html
EXPOSE 30030
ENV DATABASE_DADOS='http://localhost:9000/produtos'
COPY *.html /usr/share/nginx/html/   