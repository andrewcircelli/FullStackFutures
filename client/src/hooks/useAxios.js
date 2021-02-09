// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function useAxios(profileType) {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     console.log(profileType);
//     async function init() {
//       if (profileType !== "all") {
//         try {
//           const response = await axios.get("/api/profiles/" + profileType);
//           setData(response.data);
//         } catch (error) {
//           setError(error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         try {
//           const response = await axios.get("/api/profiles/all");
//           setData(response.data);
//         } catch (error) {
//           setError(error);
//         } finally {
//           setLoading(false);
//         }
//       }
//     }
//     init();
//   }, []);
//   // infinite loop when i add profiles to dependencies but i need it to appear when new profile is made
//   // possibly use useMemo hook on the calling page/component
//   return { data, error, loading };
// }
