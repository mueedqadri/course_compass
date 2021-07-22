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


## Getting Started

[Milan Ganesh Acharya](ml650738@dal.ca)'s Git repository can be found [here](https://github.com/5709group9/group9_course_compass/tree/milan_achar)


## Testing of Schedule

The feature that I chose for Assignment 3 is the displaying of Schedule. The Schedule can be accessed [here](https://course-compass-frontend.herokuapp.com/schedule).
The Schedule feature is dependent on the Login feature, which is being developed by another team member. As of submission of this file, the Login feature is yet to be completed. So for the purpose of this assignment, the value for User ID is hard-coded in the GET request being made by the application. As seen in the snippet below, the user ID '1' has been hard-coded, but the application is able to handle any user ID specified.
This temporary drawback will be handled once the code of the dependent feature is ready and integrated.

```
await Axios.get(process.env.REACT_APP_API_END_POINT + '/schedule/1').then((res) => {
```

## Files Created for the Assignment

These files were created as part of creating the API for accessing the schedule:
* backend/src/controllers/schedule.js
* backend/src/routes/schedule.js


## Files Modified for the Assignment

The majority of code changes were done to the file below. The code changes are for binding the data from the API request to the Schedule component.
The minor changes done in other files are not mentioned here.
* frontend/src/components/Schedule/Schedule.jsx


## API created for the Assignment

The GET API for retrieving the schedule of a User with ID 'id' was created. The API can be accessed in the following link:
https://course-compass-group9.herokuapp.com/schedule/:id


## Other related tasks for the assignment

* Creation of the database schema for the application.
* Inserting data, and updating field of the database.


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


## Built With

* [Material UI](https://material-ui.com/) - ReactUI framework with a collection of beautiful and functional components.
* [React](https://reactjs.org/) - The front-end web framework used
* [Node](https://nodejs.org/en/) - The back-end web framework used
* [Express](http://expressjs.com) - The back-end server which facilitates API requests
* [MySQL](https://www.mysql.com) - The back-end data store


## Acknowledgments

* Information relating to the Course, and Instructors were taken from [1].
* The Schedule component uses the 'DevExtreme React Scheduler' package mentioned in [2]. The Scheduler has been customised to fit the needs of the application.
* The information in [3] helped with the deployment of the entire application to Heroku.


## References

[1] Dalhousie University, *Academic Calendars*, Accessed on: JUL. 17, 2021. [Online]. Available: https://academiccalendar.dal.ca/Catalog/ViewCatalog.aspx  
[2] Developer Express Inc., *React Scheduler for Material-UI*, Accessed on: JUN. 18, 2021. [Online]. Available: https://devexpress.github.io/devextreme-reactive/react/scheduler/  
[3] Stackoverflow, *Automated heroku deploy from subfolder*, Accessed on: JUL. 17, 2021. [Online]. Available: https://stackoverflow.com/questions/39197334/automated-heroku-deploy-from-subfolder
