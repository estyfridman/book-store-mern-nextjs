import React from "react";
import { User } from "@/lib/models/models";

type UserCardProps = {
    user: User;
  };
  
export default function UserCard({ user }: UserCardProps) {
    return (
      <div >
        <div >
          <div >
            <span >Name</span>
            <br />
            <span>{user.name}</span>
          </div>
          <div >
            <span >Phone Number</span>
            <br />
            <span>{user.phone}</span>
          </div>
        </div>
 
      </div>
    );
  }