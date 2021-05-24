# Tutorial 2

Tutorial for CSCI 5709 - Group 9

* *Date Created*: 19 MAY 2021
* *Last Modification Date*: 24 MAY 2021
* *URL*: <https://tutorial2-5709.herokuapp.com/>
* Personal Branch URL:  https://github.com/manitejavarmadal/tutorial2/tree/mueedqadri

## Authors

* [Philemon Lee](philemon.lee@dal.ca) - *(Collaborator)*
* [Mani Teja Varma](manitejavarma@dal.ca) - *(Collaborator)*
* [Milan Ganesh Acharya](ml650738@dal.ca) - *(Collaborator)*
* [Abdul Mueed Qadri](ab291996@dal.ca) - *(Collaborator)*


## Getting Started

The Git repository can be found [here](https://github.com/manitejavarmadal/tutorial2.git)

*See deployment for notes on how to deploy the project on a live system.*

### Prerequisites

To have a local copy of this project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
1. Homebrew
2. Node
3. Git
```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

## Installing

#### **MacOS**
The following steps are for installing prerequisites on a Mac OS system:  
Install Homebrew as seen in [1]
1. Open the terminal and type in the command:
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
2. Once install is complete, run the below command. This should display the version if install was successful.
```
brew --version
```

Install Node as seen in [2]
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

Install Git as seen in [3]
1. In the terminal type the command:
```
brew install git
```
2. Once install is complete, run the below command. This should display the version if install was successful.
```
git --version
```
3. Register for a GitHub account, as seen in [4].

Build React App  
1. As seen in [5], clone the Github repository using the command below. You can also create a new react app as seen in [6].
```
git clone https://github.com/manitejavarmadal/tutorial2.git
```
2. Enter the newly created folder "tutorial2" and fetch all dependencies:
```
npm i
```
3. Finally start the app using the command
```
npm start
```

The following terminal log shows the versions of homebrew, node, git, and logs of the react app.
```
milan@Milans-MacBook-Air github % brew --version
Homebrew 3.1.7
Homebrew/homebrew-core (git revision af2b88de0b; last commit 2021-05-15)
milan@Milans-MacBook-Air github % node --version
v14.9.0
milan@Milans-MacBook-Air github % npm --version
7.13.0
milan@Milans-MacBook-Air tutorial2 % git --version
milan@Milans-MacBook-Air github % git clone https://github.com/manitejavarmadal/tutorial2.git
Cloning into 'tutorial2'...
remote: Enumerating objects: 100, done.
remote: Counting objects: 100% (100/100), done.
remote: Compressing objects: 100% (68/68), done.
remote: Total 100 (delta 44), reused 80 (delta 27), pack-reused 0
Receiving objects: 100% (100/100), 482.64 KiB | 1.30 MiB/s, done.
Resolving deltas: 100% (44/44), done.
milan@Milans-MacBook-Air github % cd tutorial2
milan@Milans-MacBook-Air tutorial2 % npm i

added 2003 packages, and audited 2004 packages in 45s

80 moderate severity vulnerabilities

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
milan@Milans-MacBook-Air react-demo % npm start
Compiled successfully!

You can now view react-demo in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.2.9:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

#### **Windows**
The following steps are for installing prerequisites on a Windows system:

1. Download node.js from [here](https://nodejs.org/dist/v14.17.0/node-v14.17.0-x86.msi) and proceed with the default installation.

2. Download git from [here](https://git-scm.com/downloads) and install it on your system.

3. Clone this repository on your preferred directory.
```
git clone https://github.com/manitejavarmadal/tutorial2.git
```

4. Open the directory where you cloned the app in the terminal.

5. Fetch all the dependencies.
```
npm i
```

6. Finally start the project [8].
```
npm start   
```

Once the build is successful you will see the following message:

![Success Build Message](public/images/success_build_message.jpg)


## Deployment

As mentioned in [7], to deploy the project, you need to have your Github repository linked to Heroku.

1. Login to your Heroku account.
2. Create a new app and link it to your repository using Github CLI.
3. Choose the stream from which the deployment needs to take place.
4. Add the build pack "https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz" under the settings of your current app.

## Built With

* [React](https://reactjs.org/) - The web framework used


## References
[1] R. Kumar, "How to Install Homebrew on macOS", November 24, 2020, https://tecadmin.net/install-homebrew-macos/  
[2] A. Stacoviak, "Install Node.js and npm using Homebrew on OS X and macOS", March 12, 2013, https://changelog.com/posts/install-node-js-with-homebrew-on-os-x  
[3] Linode LLC., "How to Install Git on Linux, Mac or Windows", Jan 15, 2021, https://www.linode.com/docs/guides/how-to-install-git-on-linux-mac-and-windows/  
[4] N. Levine, "How to Create an Account on GitHub", April 8, 2021, https://www.wikihow.com/Create-an-Account-on-GitHub  
[5] P. Singh, "Setting Up a React Project from GitHub", October 20, 2020, https://www.pluralsight.com/guides/setting-up-a-react-project-from-github  
[6] K. Kalyanaraman, "Getting started with Create React App", April 28, 2021, https://blog.logrocket.com/getting-started-with-create-react-app-d93147444a27/  
[7] Salesforce Inc., "GitHub Integration (Heroku GitHub Deploys)", April 09, 2020, https://devcenter.heroku.com/articles/github-integration  
[8] “Create a new react app,” Reactjs.org. [Online]. Available: https://reactjs.org/docs/create-a-new-react-app.html. [Accessed: 24-May-2021].
