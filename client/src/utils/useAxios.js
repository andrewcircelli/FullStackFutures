import { useEffect, useState } from "react";
import axios from "axios";

export default function useAxios(profileType) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      if (profileType.profileType !== undefined) {
        try {
          const response = await axios.get(
            "http://localhost:3001/api/profiles/" + profileType.profileType
          );
          console.log(response);
          setData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      } else {
        try {
          const response = await axios.get(
            "http://localhost:3001/api/profiles/"
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
  }, [profileType.profileType]);
  // infinite loop when i add profiles to dependencies but i need it to appear when new profile is made
  return { data, error, loading };
}
