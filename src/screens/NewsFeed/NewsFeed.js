import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsList } from '../../store/reducers/newsReducer';
import { CATEGORY } from '../../utils/enums';
import Loading from '../../components/shared/Loader/Loader';
import Error from '../../components/shared/Error/Error';
import NewsCard from '../../components/NewsCard/NewsCard';

const NewsFeed = () => {
    const dispatch = useDispatch();
    const { newsList, loading, error} = useSelector((state) => state.newsList);

    useEffect(() => {
        dispatch(fetchNewsList(CATEGORY.GENERAL));
    }, [dispatch]);

    if (loading) { return <Loading />; }
    if (error) {return <Error/>}

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 bg-primary text-secondary">
            {newsList.map((newsItem) => (
                <NewsCard key={newsItem.id} newsItem={newsItem} />
            ))}
        </div>
    );
};

export default NewsFeed;