# Assignment 1

Assignment for CSCI 5709 - Group 9

* *Date Created*: 5 JUNE 2021
* *Last Modification Date*: 7 MAY 2021
* *URL*: <https://a1-mueed-qadri.herokuapp.com/>
* Git repo:  https://github.com/mueedq/A1_Mueed_Qadri

## Authors

* [Abdul Mueed Qadri](ab291996@dal.ca) - *(Collaborator)*


## Getting Started

The Git repository can be found [here](https://github.com/manitejavarmadal/tutorial2/tree/milan_achar)

*See deployment for notes on how to deploy the project on a live system.*

### Prerequisites

To have a local copy of this project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
1. Homebrew
2. Node
3. Git
```

*See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins*

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

Install Git as seen in 
1. In the terminal type the command:
```
brew install git
```
2. Once install is complete, run the below command. This should display the version if install was successful.
```
git --version
```
3. Register for a GitHub account.

Build React App  
1. Clone the Github repository using the command below. 
```
git clone https://github.com/mueedq/mueed-qadri-csci5709.git
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
git version 2.31.1
```

## Development
1. As seen in [5], to create a react app run the below command. You can also create a react app from Github by cloning a repository, as seen in [6].
```
npx create-react-app <name-of-the-app>
```
2. Enter the newly created folder "<name-of-the-app>" and to start the app, run the command:
```
npm start
```

An example of what to expect is given below:
```
milan@Milans-MacBook-Air github % npx create-react-app react-demo

Creating a new React app in /Users/milan/github/react-demo.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...
    ...
    ...
    ...
Success! Created react-demo at /Users/milan/github/react-demo
Inside that directory, you can run several commands:
    ...
    ...
    ...
We suggest that you begin by typing:

  cd react-demo
  npm start

Happy hacking!
milan@Milans-MacBook-Air github % cd react-demo
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
git clone https://github.com/mueedq/mueed-qadri-csci5709.git
```

4. Open the directory where you cloned the app in the terminal.

5. Fetch all the dependencies.
```
npm i
```

6. Finally start the project.
```
npm start   
```

Once the build is successful you will see the following message:

![Success Build Message](public/images/success_build_message.jpg)


## Deployment

As mentioned in [3], to deploy the project, you need to have your Github repository linked to Heroku.

1. Login to your Heroku account.
2. Create a new app and link it to your repository using Github CLI.
3. Choose the stream from which the deployment needs to take place.
4. Add the build pack "https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz" under the settings of your current app.

## Validation of existing user
To validate the case where system shows that the account already exists please submit the form using the email "jamesbond007@dal.ca". After clicking Submit you will be able to a Dialog Box with corresponding feedback. 

## Sources Used

### RegistrationForm.jsx

*Line 116*

```
else if (!/^[A-Za-z0-9]+$/.test(FirstName)) {
    err.FirstName = "Enter a valid First Name";
} 
if 

```

The code above was created by adapting the code in [regex.test()](https://stackoverflow.com/questions/6603015/check-whether-a-string-matches-a-regex-in-js) as shown below: 

```
console.log(/^([a-z0-9]{5,})$/.test('abc1')); // false

console.log(/^([a-z0-9]{5,})$/.test('abc12')); // true

console.log(/^([a-z0-9]{5,})$/.test('abc123')); // true

```

- The code in [regex.test()](https://stackoverflow.com/questions/6603015/check-whether-a-string-matches-a-regex-in-js) was implemented by adding the custom regex and the inputting a string to the test method.
- [regex.test()](https://stackoverflow.com/questions/6603015/check-whether-a-string-matches-a-regex-in-js)'s Code was used to validate various inputs from the user.
- [regex.test()](https://stackoverflow.com/questions/6603015/check-whether-a-string-matches-a-regex-in-js)'s Code was not modified by testing various regex in regex101 and then implementing these regex to test various user inputs.

### RegistrationForm.jsx

*Line 304*

```
export default withStyles(useStyles, { withTheme: true })(RegistrationForm);

```

The code above was created by adapting the code in [stack overflow](https://stackoverflow.com/questions/56432167/how-to-style-components-using-makestyles-and-still-have-lifecycle-methods-in-mat) as shown below: 

```
export default withStyles(useStyles)(App)

```
*Line 18-38*

```
const useStyles = theme => ({
    content: {
        marginTop: theme.spacing(10),
        color: theme.palette.text.secondary,
        backgroundRepeat  : 'no-repeat',
        backgroundImage: `url(${mainImage})`,
        backgroundPosition: 'inherit',
        backgroundSize: '60%'
      },
      form: {
        width: '100%', 
        marginTop: theme.spacing(5),
      },
      submit: {
        margin: theme.spacing(3, 1, 3),
      },
      signUp:{
        borderRadius: 15,
        padding: theme.spacing(5, 3, 4)
      },
    });

```

The code above was created by adapting the code in [stack overflow](https://stackoverflow.com/questions/56432167/how-to-style-components-using-makestyles-and-still-have-lifecycle-methods-in-mat) as shown below: 

```
const useStyles = theme => ({
    root: {
        flexGrow: 1,
      },
});

```

- The code in [stack overflow](https://stackoverflow.com/questions/56432167/how-to-style-components-using-makestyles-and-still-have-lifecycle-methods-in-mat) was implemented by adding the useClass function and exporting component with the class. 
- [stack overflow](https://stackoverflow.com/questions/56432167/how-to-style-components-using-makestyles-and-still-have-lifecycle-methods-in-mat)'s Code was used to implement custom styling in the material UI components.
- [stack overflow](https://stackoverflow.com/questions/56432167/how-to-style-components-using-makestyles-and-still-have-lifecycle-methods-in-mat)'s Code was not modified by adding the classes and properties that was suitable for my application.

### AlertDialog.jsx

*Line 10-28*

```
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open
        };
        console.log('hi');
    }
    setOpen =(value)=>{
        this.setState({ 
            open: value
         });
    }
    handleClickOpen = () => {
      this.setOpen(true);
    };
  
    handleClose = () => {
      this.setOpen(false);
    };

```

The code above was created by adapting the code in [Material UI](https://material-ui.com/components/dialogs/) as shown below: 

```
 const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
```

- The code in [Material UI](https://material-ui.com/components/dialogs/) was implemented by adding the component to the file.
- [Material UI](https://material-ui.com/components/dialogs/)'s Code was used to show a dialog box to the user when an account already exists.
- [Material UI](https://material-ui.com/components/dialogs/)'s Code was not modified by changing the functions and props so as to support the class component approach.


## Built With

* [Material UI](https://material-ui.com/) - ReactUI framework with a collection of beautiful and functional components.
* [React](https://reactjs.org/) - The web framework used


## Acknowledgments

* Used the website [canva](https://www.canva.com/) to design the logo. 
* Using the website [unDraw](https://undraw.co/) for the background image.
* Used the documentation available on [Material UI](https://material-ui.com/) to integrate the code and fix any errors. Also, checked the API documentation to find the extended functionality of a component. 

## References
[1] R. Kumar, "How to Install Homebrew on macOS", November 24, 2020, https://tecadmin.net/install-homebrew-macos/  
[2] A. Stacoviak, "Install Node.js and npm using Homebrew on OS X and macOS", March 12, 2013, https://changelog.com/posts/install-node-js-with-homebrew-on-os-x   
[3] Salesforce Inc., "GitHub Integration (Heroku GitHub Deploys)", April 09, 2020, https://devcenter.heroku.com/articles/github-integration  
[4] “Create a new react app,” Reactjs.org. [Online]. Available: https://reactjs.org/docs/create-a-new-react-app.html. [Accessed: 24-May-2021].
