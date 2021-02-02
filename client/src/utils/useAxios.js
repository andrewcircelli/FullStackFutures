import { useEffect, useState } from "react";
import axios from "axios";

export default function useAxios(profileType) {
  console.log("from useAxios", profileType);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      if (profileType !== "all") {
        try {
          const response = await axios.get(
            "http://localhost:3001/api/profiles/" + profileType
          );
          console.log(response);
          setData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      } else {
        console.log("hit this route");
        try {
          const response = await axios.get(
            "http://localhost:3001/api/profiles/all"
          );
          console.log(response);
          setData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    }
    init();
  }, [profileType]);
  // infinite loop when i add profiles to dependencies but i need it to appear when new profile is made
  // possibly use useMemo hook on the calling page/component
  return { data, error, loading };
}
