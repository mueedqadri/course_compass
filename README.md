# Assignment 3

Tutorial for CSCI 5709 - Group 9

* *Date Created*: 20 JULY 2021
* *Last Modification Date*: 21 JULY 2021
* *Front End*: <https://course-compass-frontend.herokuapp.com/>
* *Back End*: <https://course-compass-group9.herokuapp.com>
* Git repo:  https://github.com/5709group9/group9_course_compass

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
- \components\courses\CourseCriteria.jsx (Fronend and Backend by Mueed Qadri)
- \components\courses\CourseDetails.jsx (Fronend and Backend by Mueed Qadri)
- \components\courses\CourseInfo.jsx (Backend by Mueed Qadri, Frontend by Milan Ganesh)
- \components\courses\CourseList.jsx (Fronend and Backend by Mueed Qadri)
- \components\courses\RegisteredCourses.jsx (Fronend and Backend by Mueed Qadri)
- \components\courses\SelectDepartment.jsx (Fronend and Backend by Mueed Qadri)
- \components\courses\TermMenu.jsx (Fronend and Backend by Mueed Qadri)
- \components\Shared\ProgressCircular.jsx (Fronend and Backend by Mueed Qadri)
- \components\Shared\Alert.jsx (Fronend and Backend by Mueed Qadri)
- \components\Shared\AlertDialog.jsx (Fronend and Backend by Mueed Qadri)

## Files Created Apart from Assignment 3
- src\components\Register\RegistrationForm.jsx (Frontend by Mueed Qadri, Backend by Philemon Lee)
- src\components\Notification\Notifications.jsx (Frontend by Mueed Qadri)
- src\components\Login.jsx (Frontend by Mueed Qadri, Backend by Philemon Lee)
- src\components\Dashboard\StudentDashboard.jsx (Frontend by Mueed Qadri)
- src\components\Schedule\Schedule.jsx (Front end by Mueed Qadri, Backend by Milan Ganesh)
- src\components\Shared\Header.jsx (Frontend by Mueed Qadri)
- src\components\Shared\ContentLayout.jsx (Frontend by Mueed Qadri)
- src\components\Shared\Footer.jsx (Frontend by Mueed Qadri)
- src\components\Profile\ProfilePage.jsx (Frontend by Mueed Qadri, Backend by Philemon Lee)

## Sources Used

### CourseCriteria.jsx

*Lines 115 - 127*

```
let newRows = courseObjList.map((row) => {
    if (
        props.registeredCourse.map((course) => course.id).includes(row.id)
    ) {
        return {
        ...row,
        action: addCourse.call(this, {
            index: row.id,
            vacancy: row.vacancy,
            isTaken: true,
        }),
        };
    })

```

The code above was created by adapting the code in [StackOverflow](https://stackoverflow.com/questions/12433604/how-can-i-find-matching-values-in-two-arrays) as shown below: 

```
const intersection = array1.filter(element => array2.includes(element));
```

- The code in [StackOverflow](https://stackoverflow.com/questions/12433604/how-can-i-find-matching-values-in-two-arrays)  was implemented by using a combination of filter and includes()
-  [StackOverflow](https://stackoverflow.com/questions/12433604/how-can-i-find-matching-values-in-two-arrays)  Code was used to filter out the courses as per the so as to find the registered courses. 
- [StackOverflow](https://stackoverflow.com/questions/12433604/how-can-i-find-matching-values-in-two-arrays)  Code was modified by changing changing the logic of filter and also using a map as per the requirement. 


### Header.jsx

*Lines 72 - 109*

```
<Tabs 
    classes={{indicator: classes.indicator}} 
    variant="scrollable" 
    scrollButtons="auto" 
    value={location.pathname} 
    onChange={handleCallToRouter}
>
    <Tab 
    className={classes.tabRoot}
    label="Dashboard" 
    value="/">

    </Tab>
    .
    .
    .
    .
    .
    <Tab
    className={classes.tabRoot}
    label="Fee"
    value="/fee"
    ></Tab>
</Tabs>
```

The code above was created by adapting the code in [StackOverflow](https://stackoverflow.com/questions/41638688/material-uis-tabs-integration-with-react-router-4) as shown below: 

```
<Tabs
value={this.props.history.location.pathname}
onChange={this.handleCallToRouter}
>
<Tab
    label="Home"
    value="/"
>
<div>
    <Home />
</div>
</Tab>
<Tab
    label="Portfolio"
    value="/portfolio"
    >
    <div>
    <Portfolio />
    </div>
</Tab>
</Tabs>   
```

- The code in [StackOverflow](https://stackoverflow.com/questions/41638688/material-uis-tabs-integration-with-react-router-4)  was implemented by using the material UI tabs with react router
-  [StackOverflow](https://stackoverflow.com/questions/41638688/material-uis-tabs-integration-with-react-router-4)  Code was used to implement navigation across the application.
- [StackOverflow](https://stackoverflow.com/questions/41638688/material-uis-tabs-integration-with-react-router-4)  Code was modified by changing changing Adding the header menu items that are need for the application.


### Alert.jsx

*Line 37-42*

```
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="error">
        {props.message}
    </Alert>
</Snackbar>
```

The code above was created by adapting the code in [Material UI](https://material-ui.com/components/snackbars/) as shown below: 

```
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success">
    This is a success message!
  </Alert>
</Snackbar>
```

- The code in [Material UI](https://material-ui.com/components/snackbars/) was implemented by adding the Snackbar component.
- [Material UI](https://material-ui.com/components/snackbars/)'s Code was used to show feedback to the user during course registration. 
- [Material UI](https://material-ui.com/components/snackbars/)'s Code was modified by adding props and using a callback to implement the desired functionality. 


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


### CourseList.jsx

*Line 50-58*

```
  const [defaultColumnWidths] = useState([
    { columnName: "courseCode", width: 90 },
    { columnName: "name", width: 170 },
    { columnName: "department", width: 170 },
    { columnName: "instructor", width: 120 },
    { columnName: "vacancy", width: 97 },
    { columnName: "credits", width: 85 },
    { columnName: "action", width: 95 },
  ]);
```

The code above was created by adapting the code in [Devexpress](https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/column-resizing/) as shown below: 

```
  const [defaultColumnWidths] = useState([
    { columnName: 'name', width: 180 },
    { columnName: 'gender', width: 180 },
    { columnName: 'city', width: 180 },
    { columnName: 'car', width: 240 },
  ]);
```

- The code in [Devexpress](https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/column-resizing/) was implemented by the adding the use state block to set the column widths. 
- [Devexpress](https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/column-resizing/)'s Code was used to change the width of the devexpress grid. 
- [Devexpress](https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/column-resizing/)'s Code was modified by changing the column keys and values.

## Integration instruction
As this feature is dependent upon for a user to logged in and then taking the user id and getting the functionality. So for the sake of completing the feature for the assignment 3 and avoiding any dependencies the user id has been set as 1. Once the login feature is integrated the logged in user id will will be taken and data will be fetched. 


## Built With
* [React js](https://reactjs.org/) - The web framework used
* [Express](https://expressjs.com/) -Api library used
* [Material UI](https://material-ui.com/) -UI library
* [Devexpress](https://www.devexpress.com/) -Building complex components such as schedular and Grid.

## Acknowledgments

* Used the website [regex101](https://regex101.com/) to text various regex and come up with the one that fitted my use case. [3]
* Data related courses such as description, instructors has been taken from Dalhousie course registration. As the Data was is huge scale [1]
* Used devexpress to build the complex components such as the schedular and Grid.[2]

## References

[1]	“Dalhousie academic calendars - view calendar,” Dal.ca. [Online]. Available: https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx?pageid=viewcatalog&catalogid=106&chapterid=6529&topicgroupid=28584&loaduseredits=False. [Accessed: 22-Jul-2021].

[2]	“React grid remote data binding,” Github.io. [Online]. Available: https://devexpress.github.io/devextreme-reactive/react/grid/demos/featured/remote-data/. [Accessed: 22-Jul-2021].

[3]	F. Dib, “regex101: build, test, and debug regex,” Regex101.com. [Online]. Available: https://regex101.com/. [Accessed: 22-Jul-2021].