# Tutorial 2

Tutorial for CSCI 5709 - Group 9

* *Date Created*: 19 MAY 2021
* *Last Modification Date*: 24 MAY 2021
* *URL*: <https://tutorial2-5709.herokuapp.com/>

## Authors

* [Philemon Lee](philemon.lee@dal.ca) - *(Collaborator)*
* [Mani Teja Varma](manitejavarma@dal.ca) - *(Collaborator)*
* [Milan Ganesh Acharya](ml650738@dal.ca) - *(Collaborator)*
* [Name](email@dal.ca) - *(Collaborator)*


## Getting Started

The Git repository can be found at:
https://github.com/manitejavarmadal/tutorial2.git

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of this project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
1. Homebrew
2. Node
```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

The following steps are for installing prerequisites on a Mac OS system:
Install Homebrew
1. Open the terminal and type in the command:
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
2. Once install is complete run the below command. This should display the version if install was successful.
```
brew --version
```

Install Node
1. In the terminal type the command:
```
brew install node
```
2. Once install has completed, run the below commands. They should display the versions if install was successful.
```
node --version
```
```
npm --version
```

The following terminal log shows the versions of homebrew and node installed.
```
milan@Milans-MacBook-Air tutorial2 % brew --version
Homebrew 3.1.7
Homebrew/homebrew-core (git revision af2b88de0b; last commit 2021-05-15)
milan@Milans-MacBook-Air tutorial2 % node --version
v14.9.0
milan@Milans-MacBook-Air tutorial2 % npm --version
7.13.0
```


## Deployment

To deploy the project, you need to have your Github repository linked to Heroku.
```
1. Login to your Heroku account.
2. Create a new app and link it to your repository using Github CLI.
3. Choose the stream from which the deployment needs to take place.
4. Add the build pack "https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz" under the settings of your current app.
```

## Built With

* [React](https://reactjs.org/) - The web framework used
