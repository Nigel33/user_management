FROM ruby:2.6.3
RUN wget -qO- https://deb.nodesource.com/setup_10.x | bash -
RUN mkdir /user_management_backend
WORKDIR /user_management_backend
COPY Gemfile /user_management_backend/Gemfile
COPY Gemfile.lock /user_management_backend/Gemfile.lock
RUN bundle install
COPY . /user_management_backend
