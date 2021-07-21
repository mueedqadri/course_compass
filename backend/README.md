# Assignment 3

Tutorial for CSCI 5709 - Group 9

* *Date Created*: 22 JULY 2021
* *Last Modification Date*: 24 MAY 2021
* *URL*: <https://mueed-qadri-csci5709.herokuapp.com/>
* Git repo:  https://github.com/mueedq/mueed-qadri-csci5709

## Authors

* [Abdul Mueed Qadri](ab291996@dal.ca) - *(Collaborator)*


## Feature - Course Management System
Managing course is the core feature of the of our application. We need to make sure that user is able to add and drop courses seamlessly. The user should also be able to able view and analyze the available courses, so that he is able to make a informed decision when selecting course. This feature includes tasks such as:
- Add course
- Drop course
- View courses
- Get feedback whenever there is a conflict

### TASK 1: Registering for a course (Add course)
The user should be able to add a valid course to his/her profile. If there is a vacancy for a course the user should be able to register for the course. 
### TASK 2: Drop a course
Users can drop a course from there profile. Before dropping the course user should be shown feedback asking for the confirmation of the user before dropping the course. 
### TASK 3: View courses
Students can view the course catalog across various departments and various terms. They should be shown relevant information about the course such as course description, credits, timings, location , mode of delivery, instructor details etc. Thus a student will be able to make a well informed decision.
### TASK 4: Feedback for Conflicting course
If a course has time conflict with one of the registered courses, the user should be shown relevant feedback. 

## Files Created for assignment 3
### Backend: 
- \routes\courseRegistration.js
- \controllers\courseRegistration.js
### Frontend
- \components\courses\CourseCriteria.jsx
- \components\courses\CourseDetails.jsx
- \components\courses\CourseInfo.jsx
- \components\courses\CourseList.jsx
- \components\courses\RegisteredCourses.jsx
- \components\courses\SelectDepartment.jsx
- \components\courses\TermMenu.jsx
- \components\Shared\ProgressCircular.jsx
- \components\Shared\Alert.jsx
- \components\Shared\AlertDialog.jsx

## Sources Used

### dummypage.html

*Lines 11 - 19*

```
    <div class="jumbotron">
        <h1 class="display-4">Welcome James Bond</h1>
        <p class="lead"> bond@007.com</p>
        <hr class="my-4">
        <p>Feel free to hangout.</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Do Nothing</a>
        </p>
    </div>

```

The code above was created by adapting the code in [BootSrtap Jumotron](https://getbootstrap.com/docs/4.0/components/jumbotron/) as shown below: 

```
<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>

```

- The code in [BootSrtap Jumotron](https://getbootstrap.com/docs/4.0/components/jumbotron/)  was implemented by adding the div tag in the body.
-  [BootSrtap Jumotron](https://getbootstrap.com/docs/4.0/components/jumbotron/)  Code was used to make the user profile page to look nice.
- [BootSrtap Jumotron](https://getbootstrap.com/docs/4.0/components/jumbotron/)  Code was modified by changing the heading and subheading in the jumotron and also changing the button title. 



### LoginForm.jsx

*Line 67*

```
 window.location.href = "/dummypage.html";

```

The code above was created by adapting the code in [Stack Overflow](https://stackoverflow.com/questions/4744751/how-do-i-redirect-with-javascript) as shown below: 

```
// similar behavior as clicking on a link
window.location.href = "http://sidanmor.com";

```

- The code in [Stack Overflow](https://stackoverflow.com/questions/4744751/how-do-i-redirect-with-javascript) was implemented by adding it in the if condition for successful validation.
- [Stack Overflow](https://stackoverflow.com/questions/4744751/how-do-i-redirect-with-javascript)'s Code was used to redirect to the next page on successful validation of the user. 
- [Stack Overflow](https://stackoverflow.com/questions/4744751/how-do-i-redirect-with-javascript)'s Code was modified by changing th redirect URL 


### LoginForm.jsx

*Line 2*

```
 import 'bootstrap/dist/css/bootstrap.css';

```

The code above was created by adapting the code in [Adding bootstrap](https://create-react-app.dev/docs/adding-bootstrap/) as shown below: 

```
import 'bootstrap/dist/css/bootstrap.css';

```

- The code in [Adding bootstrap](https://create-react-app.dev/docs/adding-bootstrap/) was implemented by pasting the import statement.
- [Adding bootstrap](https://create-react-app.dev/docs/adding-bootstrap/)'s Code was used to import bootstrap in the project. 
- [Adding bootstrap](https://create-react-app.dev/docs/adding-bootstrap/)'s Code was not modified at all. 


### LoginForm.jsx

*Line 36*

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


## Built With

* [React](https://reactjs.org/) - The web framework used

## Acknowledgments

* Used the website [regex101](https://regex101.com/) to text various regex and come up with the one that fitted my use case. 
* Used [bootstrap](https://getbootstrap.com/) to find the various classes. 

## References
[1] R. Kumar, "How to Install Homebrew on macOS", November 24, 2020, https://tecadmin.net/install-homebrew-macos/  
[2] A. Stacoviak, "Install Node.js and npm using Homebrew on OS X and macOS", March 12, 2013, https://changelog.com/posts/install-node-js-with-homebrew-on-os-x  
[3] Linode LLC., "How to Install Git on Linux, Mac or Windows", Jan 15, 2021, https://www.linode.com/docs/guides/how-to-install-git-on-linux-mac-and-windows/  
[4] N. Levine, "How to Create an Account on GitHub", April 8, 2021, https://www.wikihow.com/Create-an-Account-on-GitHub  
[5] P. Singh, "Setting Up a React Project from GitHub", October 20, 2020, https://www.pluralsight.com/guides/setting-up-a-react-project-from-github  
[6] K. Kalyanaraman, "Getting started with Create React App", April 28, 2021, https://blog.logrocket.com/getting-started-with-create-react-app-d93147444a27/  
[7] Salesforce Inc., "GitHub Integration (Heroku GitHub Deploys)", April 09, 2020, https://devcenter.heroku.com/articles/github-integration  
[8] “Create a new react app,” Reactjs.org. [Online]. Available: https://reactjs.org/docs/create-a-new-react-app.html. [Accessed: 24-May-2021].