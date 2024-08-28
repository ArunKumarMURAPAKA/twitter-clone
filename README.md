TWITTER-CLONE:

Overview:
This repo contains barebones implementation of twitter,where users can tweet and also check their 
timelines, a basic JWT authentication is added to the application.

How to run :
clone the repository locally and after that install all the required dependencies by using 
the git commmand "git install", this should install the node_modules folder in the root file where
the application is cloned, post that you can enter the command "npm start" in the terminal in-order
to run the application.

Configuration:

add a ".env" file in the repo after the cloning is complete and in that 
add the "PORT" value,
this will specify the server to listen to a certain port number
for example:
PORT = 3000

add your "MONGO_URI", which is your mongodb's connection string, this will let the server know which
database to connect to and write and read information.
for example:
MONGO_URI = <add_your_connection_string>

add a "JWT_SECRET" , this will act as a key to encrypt and decrypt your values inorder to generate a
token out of your payload.
for example:
JWT_SECRET = <add_your_desired_key_string>

Testing:
to test this application you need to first use the register API end point to register 
"http://localhost:3000/api/users/register", you have to input username and password from the body,
and then you will get a JWT token.

take the token and put it as a header, key is "Authorization".

post that you can carry on with the testing of all the other API end points.


Issues:
I havent implemented a full fledged authentication system on this due to some time constraints and
i would like to revise this at some point to make the authentication system more robust.

Contact Information:
arunmurapaka@gmail.com

