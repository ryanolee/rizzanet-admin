FROM alpine:3.7

COPY . /app/
WORKDIR /app/

# Build rizzanet admin app
RUN curl -sL  https://deb.nodesource.com/setup_9.x | bash - && apt-get install -y nodejs && curl -o- -L https://yarnpkg.com/install.sh | bash 
RUN $HOME/.yarn/bin/yarn install --pure-lockfile && $HOME/.yarn/bin/yarn build_rizzanet && $HOME/.yarn/bin/yarn global bin

VOLUME /app/

CMD ['tail -f /dev/null']