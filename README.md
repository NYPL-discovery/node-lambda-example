# node-lambda-example
Example of a node AWS lambda

To build/test install https://www.npmjs.com/package/node-lambda globally (`npm i -g node-lambda`)

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

# AWS

To set up AWS credentials, first you must install the AWS CLI.

Install `pip` or `pip3` (package manager for Python)  
Run `pip install awscli` or `pip3 install awscli`  

To add AWS credentials, type `aws configure` or `vi ~/.aws/credentials` (or your editor of choice) and enter in the credentials as provided to you by a colleague.  

```
AWS Access Key ID: (add secret)
AWS Secret Access: (add secret)
Default region name [None]: us-east-1
Default output format [None]: (blank)
```

More documentation can be found [here](https://docs.google.com/document/d/1RW47fDEvuIjUC-lJu_OFVylPQtyiX2OfjW_8QJpcm38/edit#)
