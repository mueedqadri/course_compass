//Convert week boolean to objects
import axios from "axios";

export const getWeekData = (meetingTime) => {
    let weekData = [];
    weekData.push({title: "Mon", isSet: meetingTime.monday});
    weekData.push({title: "Tue", isSet: meetingTime.tuesday});
    weekData.push({title: "Wed", isSet: meetingTime.wednesday});
    weekData.push({title: "Thur", isSet: meetingTime.thursday});
    weekData.push({title: "Fri", isSet: meetingTime.friday});
    weekData.push({title: "Sat", isSet: meetingTime.saturday});
    weekData.push({title: "Sun", isSet: meetingTime.sunday});
    return weekData;
};