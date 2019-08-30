## PURPOSE

- This is a user management app which allows us to add, delete, update and delete users. 

## DOCKER SETUP
- Open up a terminal and navigate to the user_management_backend folder. Run "docker-compose up" in the terminal 
- Open up another instance of the terminal and run these commands to connect rails to a database: 
[local_2]$ docker-compose exec web bash
[docker]$ rake db:setup


## ADDITIONAL DOCKER NOTES

Stop the server

docker-compose down
Restart the server

docker-compose restart web
Rebuild the server

docker-compose build

or

docker-compose up --build

** ENVIRONMENT VARIABLES
- Please set the environment variables for: 
1) RAILS_MAX_THREADS (if unset, it defaults to 5)

** RUNNING RUBOCOP 
- Navigate to the user_management_backend folder. Run rubocop



