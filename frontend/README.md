# CourseCompass

Project of Group 9

* *Date Created*: 18 JUN 2021
* *Last Modification Date*: 22 JUN 2021
* *URL*: <https://course-compass-frontend.herokuapp.com>
* *Git repo*: <https://github.com/5709group9/group9_course_compass>

## Authors

* [Philemon Lee](philemon.lee@dal.ca) - *(Collaborator)*
* [Mani Teja Varma](manitejavarma@dal.ca) - *(Collaborator)*
* [Milan Ganesh Acharya](ml650738@dal.ca) - *(Collaborator)*
* [Abdul Mueed Qadri](ab291996@dal.ca) - *(Collaborator)*


## Getting Started

The Git repository can be found [here](https://github.com/5709group9/group9_course_compass/tree/manitejavarma_kucherlapati)

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

#### **Windows**
The following steps are for installing prerequisites on a Windows system:

1. Download node.js from [here](https://nodejs.org/dist/v14.17.0/node-v14.17.0-x86.msi) and proceed with the default installation.

2. Download git from [here](https://git-scm.com/downloads) and install it on your system.

3. Clone this repository on your preferred directory.
```
git clone https://github.com/5709group9/group9_course_compass/
```

4. Open the frontend and backend directory where you cloned the app in the terminal.

5. Fetch all the dependencies.
```
npm i
```

6. Finally start the project.
```
npm start   
```

Once the build is successful you will see the following message:



## Deployment

As mentioned in [3], to deploy the project, you need to have your Github repository linked to Heroku.

1. Login to your Heroku account.
2. Create a new app and link it to your repository using Github CLI.
3. Choose the stream from which the deployment needs to take place.
4. Add the build pack "https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz" under the settings of your current app.


## Student Grades 
Student grades are displayed when student clicks on grades menu bar. By default a term grades are displayed. 

User can also select grades for any particular term. 

Following images illustrate them

![image](https://user-images.githubusercontent.com/84460698/126583346-e22855ee-7101-4474-b49a-9239691db365.png)
![image](https://user-images.githubusercontent.com/84460698/126583349-b4ae8ec6-5d33-4596-95fe-49dac1698b64.png)
![image](https://user-images.githubusercontent.com/84460698/126583354-4fb59345-74f1-4b20-b35b-9078d776e952.png)


## Sources Used

### Grades.jsx



```
    async function getGrades(termId) {
        await axios.get("${process.env.REACT_APP_API_END_POINT}/grades/" + termId + "/1").then((res) => {

            let rows = []
            for (let resDataRow in res.data.data) {
                let row = res.data.data[resDataRow]
                rows.push(createData(row['courseCode'], row['title'], row['grade'], row['earnedcredits'], row['earnedcredits']))
            }
            setRows(rows)
        });
    }

```

The above code fetches grades from backend and displays in the frontend


### Transcripts.jsx


```
    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_END_POINT}/transcripts/add`, { bannerid, copies, address, city, state, zip, country })
            .then(res => {
                if (res.data.success) {
                    alert("Request sent successfully. Please wait for a confirmation from the department.")
                } else {
                    alert("We are unable to handle the request right now. Please try again later");
                }
            })
    }

```

The above code submits form data to the backend that will store the details in the database

# Backend


** Record.js **  contains the controller logic to send grades and fetch transcripts form data


Note : The code was dependant on user profile. As that was pending, used hardcoded user id to fetch the data

## Built With

* [Material UI](https://material-ui.com/) - ReactUI framework with a collection of beautiful and functional components.
* [React](https://reactjs.org/) - The web framework used


## References


* https://stackoverflow.com/questions/29791721/how-get-data-from-material-ui-textfield-dropdownmenu-components
* https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters
* https://jasonwatmore.com/post/2020/07/17/react-axios-http-post-request-examples
* https://stackoverflow.com/questions/44989119/generating-a-pdf-file-from-react-components
* https://stackoverflow.com/questions/61861489/react-express-access-to-fetch-from-origin-blocked-by-cors-policy
