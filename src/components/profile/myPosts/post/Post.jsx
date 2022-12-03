import post from './Post.module.css';

const Post = ({message, likeCount}) => {
  return (
    <div className={post.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V-L3LM3amOt_N_OOkG1GLRkb5r6HnW8QoA&usqp=CAU' />
      {message}
      <div>
        <span>like: </span>{likeCount}
      </div>
    </div>
  );
};

export default Post;