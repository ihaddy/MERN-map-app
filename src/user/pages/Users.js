import React from "react";

import UsersList from "../components/UsersList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "isaac",
      image:
        "https://media.istockphoto.com/photos/mature-mixed-race-business-man-picture-id1059661424?k=20&m=1059661424&s=612x612&w=0&h=CLL4tto10GPo1gtMR9c-kPmf8VkvodjvTyqvtEuTLtg=",
      places: 3,
    },
  ];
  return (
    <div>
      <UsersList items={USERS}></UsersList>
    </div>
  );
}
