# Define a imagem base para o seu contêiner
FROM node:latest

# Atualiza o sistema operacional dentro do contêiner
RUN apt-get update && apt-get upgrade -y

# Instala o Chrome
RUN apt-get install -y wget gnupg && \
    wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && \
    apt-get install -y google-chrome-stable

WORKDIR /home/cypress

COPY . /home/cypress_intercept/

RUN npm install

CMD ["npm", "run", "cy.run"]