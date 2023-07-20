import React from "react";
import styles from "./Comment.module.css";
import PropTypes from "prop-types";
import { TiThumbsUp, TiThumbsDown } from "react-icons/ti";
import { formatDateToNow } from "../../helpers/formatDateToNow";
import { Button } from "../Button/Button";
import { useDeleteCommentMutation } from "../../redux/commentApi";

export const Comment = (props) => {
  const { createdAt, content, author, avatar, thumbsUp, thumbsDown, id } =
    props;
  const [deleteComment, { isLoading }] = useDeleteCommentMutation();
  const handleDelete = (id) => {
    deleteComment(id);
  };
  const handleClickReaction = (name) => {
    const newComment = {
      createdAt,
      content,
      author,
      avatar,
      thumbsUp,
      thumbsDown,
      id,
      [name]: props[name] + 1,
    };
    return newComment;
  };
  return (
    <li className={styles.card}>
      <img className={styles.avatar} src={avatar} alt={author} />
      <div className={styles.cardWrapper}>
        <div className={styles.cardBody}>
          <h3 className={styles.author}>{author}</h3>
          <p className={styles.content}>
            <span className={styles.blockquote}>"</span>
            {content}
            <span className={styles.blockquote}>"</span>
          </p>
        </div>

        <div className={styles.cardFooter}>
          <span className={styles.date}>{formatDateToNow(createdAt)}</span>

          <div className={styles.buttonBox}>
            <Button
              counter={thumbsUp}
              id={id}
              handleClick={() => handleClickReaction("thumbsUp")}
            >
              <TiThumbsUp className={styles.icon} />
            </Button>

            <Button
              counter={thumbsDown}
              role="thumbsDown"
              id={id}
              handleClick={() => handleClickReaction("thumbsDown")}
            >
              <TiThumbsDown className={styles.icon} />
            </Button>
            <button type="button" onClick={() => handleDelete(id)}>
              {isLoading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

Comment.propTypes = {
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  thumbsUp: PropTypes.number.isRequired,
  thumbsDown: PropTypes.number.isRequired,
};

// const obj = { name: 'Alex' }

// obj.name
// obj[prop];
// const prop = "name"
