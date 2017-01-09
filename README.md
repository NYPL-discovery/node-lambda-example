# node-lambda-example
Example of a node AWS lambda


To build/test install https://www.npmjs.com/package/node-lambda globally 

Any environmental variables need to be stored in file: deploy.env

Edit event.json to simulate a event and then test with:
```
node-lambda run --configFile deploy.env
```
When ready to push to AWS you must package the repo:
```
node-lambda package --configFile deploy.env
```
You probably don't need to do --configFile deploy.env when making the package, since ENV vars can now be configed in AWS
