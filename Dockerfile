FROM nginx:alpine
COPY ./dist/www-techgarden-gg/browser/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]