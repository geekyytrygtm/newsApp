# API key is: 7e6e055e18234e9aa28b7af61b1f8767

# App start Steps:
1. Run npm install or yarn install
2. Server start: Open terminal and navigate to "server" folder and run node src\server.js or add the following in launch.json if using VS code and press F5
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/server/src/server.js",
            "env": {
                "NEWS_API_KEY":"7e6e055e18234e9aa28b7af61b1f8767"
            } 
        }
    ]
}

3. Open another terminal and navigate to client\news-app and run "npm start"



# Overview
This task is intended for people who interview for our Software Engineer roles.

Please make sure you read [our expectations](../README.md#what-we-are-looking-for) first before starting the following tasks:  

## Option 1

Build a JavaScript application that shows the latest news from the United Kingdom, using the [newsapi.org](https://newsapi.org) service.

Running the app we should be able to see the latest **UK news**. The user should have the ability to filter by keywords (see [everything endpoint api](https://newsapi.org/docs/endpoints/everything)). Optionally, if the user clicks on a news item it will navigate to a page displaying the full news article selected.

This is a full stack challenge and we are expecting both a Frontend application and a Backend application that communicate with each other.

A Full Stack developer is someone with familiarity in each layer; you might be stronger on the frontend, or vice-versa. Feel free to focus more on what you know best, be creative and show us your skills!

### Submission
See ["how to submit your work"](../README.md#how-to-submit-code)

### FAQ

Q: Should I commit my `newsapi.org` token?  
A: No, but please provide one for us

Q: What browsers must I support?  
A: Latest Firefox & Chrome. Don’t worry about any browser inconsistencies.

Q: What version of Node must I support?  
A: >= 8

Q: Should I deploy the application somewhere it is publicly reachable?
A: No

Q: Can I use transpilers?  
A: Yes, but you [may not need to](http://kangax.github.io/compat-table/es6/).

Q: Can I use libraries, frameworks, etc?  
A: Yes... but please consider ["What we are looking for?"](../README.md#what-we-are-looking-for) guidelines.

## Option 2

If you have some existing code that you would be prepared to share with us, we can look at that instead. The code should meet the following criteria:

* It should be similar hours of your own work as with Option 1
* Ideally, it should involve an element of web development
* It should demonstrate how you approach a problem
* It should be something that you are able to discuss with us
* It should involve both client and server-side skills 



