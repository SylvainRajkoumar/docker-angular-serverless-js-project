# docker-angular-serverless-js-project
The goal of this project was an introduction to serverless, docker and angular/ember technologies.  
In this game, a vehicle goes to every city and start again and again (with a new city layout).   
Each time a vehicle arrive in a city, a random speed boost is given to that vehicle by a provider.
The vehicle can track the cities via a function in the serverless service (getCities).   

There are 4 services : 
  - Game - Game Loop  
  - Interface - Angular   
  - Serverless - Interaction with MongoDB  
  - db - MongoDB  

## Prerequisites (Windows)

Install Docker Toolbox https://docs.docker.com/toolbox/toolbox_install_windows/  
Install Git https://git-scm.com/download

```
git clone https://github.com/SylvainRajkoumar/docker-angular-serverless-js-project  
```  

## Running  
Then you need to open the Docker Quickstart Terminal and change directory (it depends where you cloned the projet): 
```
cd docker-angular-serverless-js-project
docker-compose up --build
```

If you want to see the interface, open your browser and go to http://192.168.99.100:4200/  
The initialization might take some times.

You might need to use this command before running again docker-compose up  
```
docker-compose down  
```
## License

This project is licensed under the terms of the
[MIT license](/LICENSE.md).


Sylvain RAJKOUMAR  
Thomas BRASEY
