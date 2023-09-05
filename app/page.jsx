"use client"
import React, {useState} from "react"
import Hero from "@/Components/Hero"

let tasks = [];
let renderTask;
const curr = new Date();

function deleteTask(index) {
  let copy = tasks;
  copy.splice(index,1);
  tasks = copy;
}

function page() {
  let [task,settask] = useState("");
  return(
    <main>
      <Hero/>
      <div className="todo">
        <form onSubmit={(e)=>{
          e.preventDefault();
          tasks.push({task});
          settask("");
          renderTask = tasks.map((obj,index)=>{
            return(
              <li key={index}>
                <span>{obj.task}</span>
                <div>
                  <span>{`${curr.getDay()}/${curr.getMonth()}/${curr.getFullYear()}`}</span>
                  <span className="del" onClick={()=>{
                    deleteTask(index);
                  }}>X</span>
                </div>
              </li>
            )
          });
        }}>
          <input type="text" placeholder="Task name" value={task} onChange={(e)=>{
            settask(e.target.value);
          }}/>
          <button className="btn" type="submit">Add task</button>
        </form>
        <div className="taskbar">
          <ul>{renderTask}</ul>
        </div>
      </div>
    </main>
  )
}

export default page;