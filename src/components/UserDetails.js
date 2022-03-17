import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  // const params = useParams();
  // const userId = params.userId;
  //or destructured way.
  const { userId } = useParams();

  return (
    <>
      <h4>Details about user {userId}. </h4>
    </>
  );
};
