import PropTypes from "prop-types";
// {
//   "id": 1,
//   "cover": "https://i.ibb.co/84Zfw2n/1.jpg",
//   "title": "Top 10 ES6 Features You Must Know",
//   "author_img": "https://i.ibb.co/VvLNdLL/boy1.png",
//   "author": "Hamza Sohail",
//   "posted_date": "September 15, 2023",
//   "reading_time": 5,
//   "hashtags": ["beginners", "es6"]
// },

const Blogpost = ({ blog }) => {
  // console.log(blog);
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  //   console.log(blog);
  return (
    <div className="space-y-5">
      <img className="w-full rounded-lg" src={cover} alt="Blog Post Cover" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img className="w-16" src={author_img} alt="" />
          <div className="space-y-1">
            <h2 className="font-bold text-xl">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>{reading_time} Min Read</div>
      </div>
      <div className="space-y-3">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p>
          {hashtags.map((hash, ids) => (
            <span key={ids}>
              <a className="ml-4 font-semibold hover:text-blue-500" href="#">
                #{hash}
              </a>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

Blogpost.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blogpost;
