FROM nginx:latest
COPY /dist/guitars-app/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]