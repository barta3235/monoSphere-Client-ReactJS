import { useLoaderData } from 'react-router-dom';
import Carousel from '../components/Carousel'
import TabCategories from '../components/TabCategories';
const Home = () => {
    const jobs=useLoaderData();

    return (
        <div>
            {/* Carousel */}
            <Carousel></Carousel>

            {/* Tabs */}
            <TabCategories jobs={jobs}></TabCategories>
        </div>
    );
};

export default Home;