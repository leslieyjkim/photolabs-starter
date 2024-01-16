import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({ topics, onLoadTopic }) => {
  return (
    <div className='top-nav-bar__topic-list'>
      {topics.map((topic) => (
        <span key={topic.id}>
          <TopicListItem
            id={topic.id}
            title={topic.title}
            onLoadTopic={onLoadTopic}
          />
        </span>
      ))}
    </div>
  );
};

export default TopicList;
