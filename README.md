# Assignment 3

Assignment 3 feature development

* *Date Created*: 18 JUN 2021
* *Last Modification Date*: 21 JUL 2021
* *Front End*: <https://course-compass-frontend.herokuapp.com/>
* *Back End*: <https://course-compass-group9.herokuapp.com>
* *Git Repository*: <https://github.com/5709group9/group9_course_compass.git>

## Authors

* [Philemon Lee](philemon.lee@dal.ca) - *(Collaborator)*
* [Mani Teja Varma](manitejavarma@dal.ca) - *(Collaborator)*
* [Milan Ganesh Acharya](ml650738@dal.ca) - *(Collaborator)*
* [Abdul Mueed Qadri](ab291996@dal.ca) - *(Collaborator)*

## <strong>Important note for Reviewers:
Please create a new account or use the following credentials for reviewing the application:

username: email@email.com

password: password
</strong>
## Testing of Schedule

The Schedule can be accessed [here](https://course-compass-frontend.herokuapp.com/schedule).  
The Schedule feature is dependent on the Login feature. As of submission of this file, the Login feature is yet to be completed. So for the purpose of this assignment, the value for User ID is hard-coded in the GET request being made by the application. As seen in the snippet below, the user ID '1' has been hard-coded, but the application is able to handle any user ID specified.  
This temporary drawback will be handled once the code of the dependent feature is ready and integrated.

```
await Axios.get(process.env.REACT_APP_API_END_POINT + '/schedule/1').then((res) => {
```

## File Authors

### Backend: 
- backend\src\controllers\schedule.js - Backend created by Milan Ganesh Acharya
- backend\src\routes\schedule.js - Backend created by Milan Ganesh Acharya
- backend\routes\courseRegistration.js - Backend by Mueed Qadri
- backend\controllers\courseRegistration.js - Backend by Mueed Qadri
- backend\src\routes\records.js - Backend by Mani Teja Varma Kucherlapati
- backend\src\controllers\record.js - Backend by Mani Teja Varma Kucherlapati
- 
### Frontend

- frontend\src\component\Schedule\Schedule.jsx - Frontend by Abdul Mueed Qadri, and corresponding Backend(1 and 2) by Milan Ganesh Acharya
- frontend\components\courses\CourseCriteria.jsx (Fronend and Backend by Mueed Qadri)
- frontend\components\courses\CourseDetails.jsx (Fronend and Backend by Mueed Qadri)
- frontend\components\courses\CourseInfo.jsx (Backend by Mueed Qadri, Frontend by Milan Ganesh)
- frontend\components\courses\CourseList.jsx (Fronend and Backend by Mueed Qadri)
- frontend\components\courses\RegisteredCourses.jsx (Fronend and Backend by Mueed Qadri)
- frontend\components\courses\SelectDepartment.jsx (Fronend and Backend by Mueed Qadri)
- frontend\components\courses\TermMenu.jsx (Fronend and Backend by Mueed Qadri)
- frontend\components\Shared\ProgressCircular.jsx (Fronend and Backend by Mueed Qadri)
- frontend\components\Shared\Alert.jsx (Fronend and Backend by Mueed Qadri)
- frontend\components\Shared\AlertDialog.jsx (Fronend and Backend by Mueed Qadri)
- src\components\Register\RegistrationForm.jsx (Frontend by Mueed Qadri, Backend by Philemon Lee)
- src\components\Notification\Notifications.jsx (Frontend by Mueed Qadri)
- src\components\Login.jsx (Frontend by Mueed Qadri, Backend by Philemon Lee)
	@@ -62,96 +56,8 @@ await Axios.get(process.env.REACT_APP_API_END_POINT + '/schedule/1').then((res)
- src\components\Shared\Footer.jsx (Frontend by Mueed Qadri)
- src\components\Profile\ProfilePage.jsx (Frontend by Mueed Qadri, Backend by Philemon Lee)
- frontend\src\components\records\Grades.jsx (Frontend by Mani Teja Varma Kucherlapti)
- frontend\src\components\records\Transcripts.jsx (Frontend by Mani Teja Varma Kucherlapti)


## APIs created for the Assignment

The GET API for retrieving the schedule of a User with ID 'id':  
https://course-compass-group9.herokuapp.com/schedule/:id


## Sources Used

### Schedule.jsx

*Lines 201 - 240*

```
    <Paper elevation={10}>
        <Scheduler
          data={appointments}
          height={props.height}
        >
          <ViewState
            defaultCurrentDate={year + " " + month + " " + day}
            defaultCurrentViewName={props.viewDefault}
          />
          <WeekView
            timeTableCellComponent={TimeTableCell}
            dayScaleCellComponent={DayScaleCell}
            startDayHour={8}
            endDayHour={18}
          />
          <DayView
            startDayHour={8}
            endDayHour={18}
          />
          <MonthView
            timeTableCellComponent={TimeTableCellMonth}
            dayScaleCellComponent={DayScaleCellMonth}
          />
          <Appointments />
          <AppointmentTooltip
          />
          <Resources
            data={resources}
            mainResourceName="roomId"
          />
          <Toolbar />
          <DateNavigator />
          {props.showToday && <TodayButton />}
          {props.showViewSwitch && <ViewSwitcher />}
        </Scheduler>
      </Paper>
```

The code above was created by adapting the code in [DevExtreme Reactive](https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/appointments/) as shown below:

```
    <Paper>
        <Scheduler
          data={data}
        >
          <ViewState
            defaultCurrentDate="2018-06-25"
          />
          <EditingState
            onCommitChanges={this.commitChanges}
          />
          <WeekView
            startDayHour={9}
            endDayHour={15}
          />
          <MonthView />
          <Appointments />
          <Toolbar />
          <ViewSwitcher />
          <EditRecurrenceMenu />
          <DragDropProvider />
        </Scheduler>
      </Paper>
```

- [DevExtreme Reactive](https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/appointments/)'s Code was used as it is part of the package of the React Scheduler.
- [DevExtreme Reactive](https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/appointments/)'s Code was modified by supplying custom data as the source, and supplying props to the components.


### CourseCriteria.jsx

*Lines 115 - 127*
	@@ -173,32 +79,32 @@ let newRows = courseObjList.map((row) => {
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
	@@ -215,7 +121,7 @@ const intersection = array1.filter(element => array2.includes(element));
</Tabs>
```

The code above was created by adapting the code in [StackOverflow](https://stackoverflow.com/questions/41638688/material-uis-tabs-integration-with-react-router-4) as shown below:

```
<Tabs
	@@ -258,7 +164,7 @@ onChange={this.handleCallToRouter}
</Snackbar>
```

The code above was created by adapting the code in [Material UI](https://material-ui.com/components/snackbars/) as shown below:

```
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
	@@ -269,8 +175,8 @@ The code above was created by adapting the code in [Material UI](https://materia
```

- The code in [Material UI](https://material-ui.com/components/snackbars/) was implemented by adding the Snackbar component.
- [Material UI](https://material-ui.com/components/snackbars/)'s Code was used to show feedback to the user during course registration.
- [Material UI](https://material-ui.com/components/snackbars/)'s Code was modified by adding props and using a callback to implement the desired functionality.


### LoginForm.jsx
	@@ -282,16 +188,16 @@ The code above was created by adapting the code in [Material UI](https://materia
```

The code above was created by adapting the code in [Adding bootstrap](https://create-react-app.dev/docs/adding-bootstrap/) as shown below:

```
import 'bootstrap/dist/css/bootstrap.css';
```

- The code in [Adding bootstrap](https://create-react-app.dev/docs/adding-bootstrap/) was implemented by pasting the import statement.
- [Adding bootstrap](https://create-react-app.dev/docs/adding-bootstrap/)'s Code was used to import bootstrap in the project.
- [Adding bootstrap](https://create-react-app.dev/docs/adding-bootstrap/)'s Code was not modified at all.


### LoginForm.jsx
	@@ -301,12 +207,12 @@ import 'bootstrap/dist/css/bootstrap.css';
```
else if (!/^[A-Za-z0-9]+$/.test(FirstName)) {
    err.FirstName = "Enter a valid First Name";
}
if
```

The code above was created by adapting the code in [regex.test()](https://stackoverflow.com/questions/6603015/check-whether-a-string-matches-a-regex-in-js) as shown below:

```
console.log(/^([a-z0-9]{5,})$/.test('abc1')); // false
	@@ -338,7 +244,7 @@ console.log(/^([a-z0-9]{5,})$/.test('abc123')); // true
  ]);
```

The code above was created by adapting the code in [Devexpress](https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/column-resizing/) as shown below:

```
  const [defaultColumnWidths] = useState([
	@@ -349,36 +255,30 @@ The code above was created by adapting the code in [Devexpress](https://devexpre
  ]);
```

- The code in [Devexpress](https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/column-resizing/) was implemented by the adding the use state block to set the column widths.
- [Devexpress](https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/column-resizing/)'s Code was used to change the width of the devexpress grid.
- [Devexpress](https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/column-resizing/)'s Code was modified by changing the column keys and values.


## Built With

* [Material UI](https://material-ui.com/) - ReactUI framework with a collection of beautiful and functional components.
* [React](https://reactjs.org/) - The front-end web framework used
* [Node](https://nodejs.org/en/) - The back-end web framework used
* [Express](http://expressjs.com) - The back-end server which facilitates API requests
* [Devexpress](https://www.devexpress.com/) -Building complex components such as schedular and Grid.
* [MySQL](https://www.mysql.com) - The back-end data store


## Acknowledgments

* Information relating to the Course, and Instructors were taken from [1].
* The Schedule component uses the 'DevExtreme React Scheduler' package mentioned in [2]. The Scheduler has been customised to fit the needs of the application.
* The information in [3] helped with the deployment of the entire application to Heroku.
* Used the website [regex101](https://regex101.com/) to text various regex and come up with the one that fitted my use case. [4]
* Used devexpress to build the complex components such as the schedular and Grid.[5]


## References

[1] Dalhousie University, *Academic Calendars*, Accessed on: JUL. 17, 2021. [Online]. Available: https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx  
[2] Developer Express Inc., *React Scheduler for Material-UI*, Accessed on: JUN. 18, 2021. [Online]. Available: https://devexpress.github.io/devextreme-reactive/react/scheduler/  
[3] Stackoverflow, *Automated heroku deploy from subfolder*, Accessed on: JUL. 17, 2021. [Online]. Available: https://stackoverflow.com/questions/39197334/automated-heroku-deploy-from-subfolder

[4]	F. Dib, “regex101: build, test, and debug regex,” Regex101.com. [Online]. Available: https://regex101.com/. [Accessed: 22-Jul-2021].

[5]	“React grid remote data binding,” Github.io. [Online]. Available: https://devexpress.github.io/devextreme-reactive/react/grid/demos/featured/remote-data/. [Accessed: 22-Jul-2021].
