import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    return (
        <div className="bg-white p-4 rounded-xl mb-4">
            <h2 className="font-semibold text-lg text-[#111111]">{bookmark.title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;