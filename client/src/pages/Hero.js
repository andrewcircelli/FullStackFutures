import React from "react";
import useAxios from "../hooks/useAxios";
import SpinnerPage from "../components/Spinner";
import { useParams } from "react-router-dom";

const Home = (props) => {
  const { profileType } = useParams();

  // consider moving to globalStore
  const { data: profiles, loading, error } = useAxios(profileType);
  if (error) throw error;
  if (loading) return <SpinnerPage />;

  return <div></div>;
};

export default Home;
