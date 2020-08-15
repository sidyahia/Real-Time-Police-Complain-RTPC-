# REAL TIME POLICE COMPLAIN (RTPC)

<table>
   <tr>
      <th><b>Name</b></th>
      <th><b>Matric Number</b></th>
    </tr> 
   <tr>
    <td>Yahia Siddique</td>
    <td>1639835</td>
  </tr>
 </table>

<b>Introduction:</b><br>
Crimes are committed everywhere every day. People’s assets are hijacked, damaged, stolen, robbed by criminal in regular basis. Since the pandemic has started many people cut out of the job or forced to shut down the business. Which eventually become a crucial factor for high crime rate. To help both people and police I am going to develop an app called “Real Time Police Complain (RTPC)”. People will be able to send data like image and video to the police real time just with few taps.
<br><br>
<b>Objectives:</b><br>
Better communication in crime management
Adapting the new normal by doing remote complain  
<br><br>
<b>Features:</b><br><br>
<b>Written Complain:</b> Now police complain can be made from right your home or your comfort zone. Corona virus made the situation harder fro people to go to police station. RTPC app  makes the job easier. A person no longer needs to go to police station. He/she can do a written complain right from the home while being safe and maintaining social distance
<br><br>
<b>show the evidence:</b> Every day we are seeing crimes Infront of our eyes.Somtimes we ignore to report small crimes because of goign to the police station and showing the evidance.We think it's a long procedure. RTPC is introducing “Show the evidance” feature by which you will be able to submite images regarding the crime to the police. Through the RTPC app now you can submit your evidance along with written complain
<br><br>
<b>Live location:</b> Just with a single tap exact location will be saved automatically. No need to enter the location manually
<br><br>
<b>Functionality:</b><br>
<br>
<b>API:</b> Camera API,Location API,permission API. Camera API pick the image from the gallery of a complainer which will be saved directly to police data base once submitted. Location API will determine the location of the complainer to determine the exact location from where complain is submitted. This will make the police job much easier. The app accesses users location and gallery which which requires user permission. This API is used to get the permission
<br><br>
<b>Components:</b> Various presentational components is used View, Text, Stylesheet Touchable opacity, Status bar. Text input is used for taking the written complain. A function is used to get the exact time from the user.
<br><br>
<b>Security:</b> This app will authenticate both the user and police. New user needs to sign up first before making any complain. It’s highly suggested that when a user installs this app should do the sign up since in case of emergency there will be hardly any time for signing up. Successful register users will be enlisted. Police will be able to access the dashboard by using authentic police email. For dashboard no unauthorized sign up is allowed. Only police can access it. It puts high security against hacker or any unauthorized person trying to access the dashboard
<br><br>
<b>Firebase data storage:</b> Written Complains will be stored in firebase database. Images uploaded by complainers will be stored in firebase storage. This is a secure and an efficient way of storing various types of data. When police request to access the data, data will be retrieved from data base and images from storage. Police will be able to see the written complain and images. Also the location from where the complain is made
<br><br>
<b>Error Checking:</b> Errors are inevitable. Fail to handle the errors well and user frustration is ready. In RTPC app error checking is an important part of the app. TO reduce error in RTPC  A user will not be able to submit the complain without filling all the parts which are written complain image and location. An alert message will pop up and request the user to enter all the required parts. Also while log in wrong format of email or password also will be checked. An error message containing where to correct will be displayed
<br><br>
<b>Screen Navigation:</b><br><br>
![117580074_310224100320745_5512120092180161407_n](https://user-images.githubusercontent.com/67378764/90308208-72118900-deff-11ea-8b2a-e260bdb3929d.jpg)


<br><br>
<b>Swquence Diagram:</b><br><br>
![109887671_3724187450931694_8588169718081073152_n](https://user-images.githubusercontent.com/67378764/88481635-72f96f80-cf7e-11ea-80ac-81437ebe7c46.jpg)

<br>
<b>Reference:</b><br><br>
https://reactnative.dev/docs/getting-started  <br>
https://www.digitalaptech.com/why-mobile-apps-are-essential-for-crime-management/ <br>
https://rnfirebase.io/ <br>


