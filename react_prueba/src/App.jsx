import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  { userName: "midudev", name: "midudev", initialIsFollowing: true},
  { userName: "pheralb", name: "Pablo Hernandez", initialIsFollowing: false},
  { userName: "elonmusk", name: "Elon Musk", initialIsFollowing: true },
];

export function App() {

  return (
    <>
      <section className="App">

        {
          users.map(
          user =>{
            const {userName,  name, initialIsFollowing} = user;
            return (
              <TwitterFollowCard 
              key = {userName}
              userName={userName}
              name = {name}
              initialIsFollowing={initialIsFollowing}
              >
              </TwitterFollowCard>            
              )
          })
        }

      </section>
    </>
  );
}
