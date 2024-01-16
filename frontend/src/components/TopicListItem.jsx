import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title, onLoadTopic }) => { //TopicListItem is functional component that takes three props: id, title, and onLoadTopic.
  const handleClick = () => { //click event handler
    onLoadTopic(id); //button clicked -> calls onLoadTopic function -> passes the id prop as an argument.
  };

  return (
    <span className='topic-list__item' onClick={handleClick}>
      <span>{title}</span>
    </span>
  );
};

export default TopicListItem;