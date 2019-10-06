import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { displayList } from "./a-list-slice";
import store from "../../store";

function ViewList() {
  const dispatch = useDispatch();

  const setList = list => {
    dispatch(displayList({ title: list["title"], items: list["items"] }));
  };

  const listOne = {
    title: "check",
    items: [
      {
        items: [
          {
            content: "Get this to work"
          },
          {
            content: "this too"
          }
        ]
      }
    ]
  };

  setList(listOne);

  const fetchedList = store.getState().aList;

  const list = (
    <>
      <h2>{fetchedList.title}</h2>
      {fetchedList.items.map(mainItem => {
        return mainItem.items.map(nestedItem => {
          return <li>{nestedItem.content}</li>;
        });
      })}
    </>
  );

  return (
    <>
      <h1>View a list</h1>
      {list}
    </>
  );
}

export default ViewList;
