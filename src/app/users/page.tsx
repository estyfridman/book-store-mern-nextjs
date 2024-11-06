'use client'

import { getAllUsers } from "@/services/usersService";
 
export default function UserPage() {

  async function fetchUsers() {
    try {
      const documents = await getAllUsers();
      console.log(documents);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  return (
    <div>
        <h2>All Users</h2>
        <div>
         
            <button onClick={fetchUsers} className="border border-red-400 rounded-md">
                render Users
            </button>

        </div>
      </div>
  );
}
