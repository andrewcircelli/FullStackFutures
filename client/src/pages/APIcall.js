const path = require("path");
const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");


dotenv.config();
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// $("#webapi").click(function () {
//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log("Email sent");
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });



sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'test@example.com',
  from: 'test@example.com', // Use the email address or domain you verified above
  subject: 'Hey, Thanks for Signing Up!',
  text: 'We will reach out to you with next steps after we review your profile. We will work tirelessly to help you succeed with K-12 Elites!',
  html: '<strong>Together we WILL soar!</strong>',
};
//ES6
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  }, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();






































// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function useAxios(profileType) {
//     const [data, setData] = useState([]);
//     // const [error, setError] = useState(null);
//     // const [loading, setLoading] = useState(true);
// ;
//     // const settings = {
//     //     "x-rapidapi-key": "09d06cecffmsh87ca121083d57d0p1ebd57jsn0be05f50ffbf",
//     //     "x-rapidapi-host": "university-college-list-and-rankings.p.rapidapi.com",
//     //     "useQueryString": true
//     // };
//     const options = {
//         method: 'GET',
//         url: 'https://university-college-list-and-rankings.p.rapidapi.com/api/top-universities/us',
//         headers: {
//           'x-rapidapi-key': '09d06cecffmsh87ca121083d57d0p1ebd57jsn0be05f50ffbf',
//           'x-rapidapi-host': 'university-college-list-and-rankings.p.rapidapi.com'
//         }
//       };
      

    

//     useEffect(() => {
//         axios.request(options).then(function (response) {
//             console.log(response.data);
//         }).catch(function (error) {
//             console.error(error);
//         });
//         // axios.get("https://university-college-list-and-rankings.p.rapidapi.com/api/top-universities/us",settings)
//         //     .then(response => {
//         //         console.log(response)
//         //         setData(["temp"])
//         //     }).catch(error => {
//         //         console.log(error)
//         //     })
//       },[])

//     return(<h1>placeholder</h1>)
//     }