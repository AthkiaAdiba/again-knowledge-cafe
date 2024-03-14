import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddBookmarks, handleAddReadingTime }) => {
    const { id, cover, title, author_name, author_img, posted_date, time, hashtags } = blog;
    return (
        <div>
            <div className="space-y-4 card bg-base-100 mb-10 mt-5">
                <figure><img className="rounded-xl" src={cover} alt="Shoes" /></figure>
                <div className="card-body space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img className="w-[60px]" src={author_img} alt="" />
                            <div>
                                <h2 className="text-2xl font-bold text-[#111111]">{author_name}</h2>
                                <p className="text-base font-semibold text-[#11111199]">{posted_date}</p>
                            </div>
                        </div>
                        <div className="text-xl font-medium">
                            <span>{time} min read</span>
                            <button onClick={() => handleAddBookmarks(blog)} className="text-2xl font-medium"><CiBookmark></CiBookmark></button>
                        </div>
                    </div>
                    <h2 className="card-title text-3xl font-bold text-[#111111]">{title}</h2>
                    <p className="text-base font-semibold text-[#11111199]">
                        {
                            hashtags.map((has, idx) => <span key={idx} className="mr-4"><a>#{has}</a></span>)
                        }
                    </p>
                    <div>
                        <button onClick={() => handleAddReadingTime(time, id)} className="font-semibold text-xl text-[#6047EC] underline">Mark as read</button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func.isRequired,
    handleAddReadingTime: PropTypes.func.isRequired


}

export default Blog;