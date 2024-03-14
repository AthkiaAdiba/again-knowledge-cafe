import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';


const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(readingTime);
    // console.log(bookmarks)
    return (
        <div>
            <div className="text-2xl font-bold text-[#6047EC] bg-[#6047ec1a] px-9 py-5 mb-4 rounded-xl">
                <h2>Spent time on read : {readingTime} min</h2>
            </div>
            <div className="w-[500px] p-8 bg-[#1111110d] rounded-2xl">
                <h2 className="text-2xl font-bold text-[#111111] mb-4">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;