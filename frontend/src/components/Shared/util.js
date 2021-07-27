//Convert week boolean to objects
import axios from "axios";

export const getWeekData = (meetingTime) => {
  let weekData = [];
  weekData.push({ title: "Mon", isSet: meetingTime.monday });
  weekData.push({ title: "Tue", isSet: meetingTime.tuesday });
  weekData.push({ title: "Wed", isSet: meetingTime.wednesday });
  weekData.push({ title: "Thur", isSet: meetingTime.thursday });
  weekData.push({ title: "Fri", isSet: meetingTime.friday });
  weekData.push({ title: "Sat", isSet: meetingTime.saturday });
  weekData.push({ title: "Sun", isSet: meetingTime.sunday });
  return weekData;
};

export const getUserInfo = async (id) => {
  console.log("Getting user info...")
  const usersAPI = process.env.REACT_APP_API_END_POINT + '/users/'
  if (id) {
    const res = await axios.get(`${usersAPI}${id}`)
    // check response
    if (res.status === 200) {
      // do if logged in, save logged in state
      // console.log(res.data.user)
      return await res.data.user
    } else {
      console.log("failed to get state")
      return null;
    }
  } else {
    console.log("Invalid id")
    return null
  }
}