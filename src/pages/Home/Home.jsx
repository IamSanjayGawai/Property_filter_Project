import Card from '../../components/Card';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { setSelectedCard } from '../../redux/reducers/cardslice'; // Adjust the import path
import { useDispatch } from 'react-redux';

function Home() {

    const cardData = useSelector(state => state.card.cards)

    const [visible, setVisible] = useState(6)
    const dispatch = useDispatch();
    const [selectedCity, setSelectedCity] = useState(null);
    const navigate = useNavigate(); // Get the navigation function from react-router-dom


    // Show more cards
    const showAllcards = () => {
        setVisible((prevValue) => prevValue + 3)

    }

    //  Filter which filters cards by city name
    const filterCardsByCity = city => {
        setSelectedCity(city);
        setVisible(6); // Reset visible cards when a city is selected
    };

    // View all cards and remove filters by city
    const viewAllCards = () => {
        setSelectedCity(null);
        setVisible(6);
    }

    return (
        <>
            <h1 className='text-center'>Feature Listed Property</h1>
            <h6 className='text-center'>Real estate can be bought, sold, lessed or rented, and can be </h6>
            <h6 className='text-center'>a valuable investement opportunity. The value of real estate can be...</h6>

            < div className="container-fluid">
                {/* row-container */}
                <div className="row " >
                    <div className="col " >
                        {/* filter buttons row */}
                        <div className="row sticky-top filter mt-5 px-5" style={{ height: '60px' }}>
                            {/* left buttons col  */}
                            <div className="col col-8 gap-4  d-flex  align-items-center">
                                <button
                                    onClick={() => filterCardsByCity('New York')}
                                    className={`btn btn-primary rounded-pill ${selectedCity === 'New York' ? 'active' : ''}`}
                                >
                                    New York
                                </button>
                                <button
                                    onClick={() => filterCardsByCity('Mumbai')}
                                    className={`btn btn-primary rounded-pill ${selectedCity === 'Mumbai' ? 'active' : ''}`}
                                >
                                    Mumbai
                                </button>                <button
                                    onClick={() => filterCardsByCity('Paris')}
                                    className={`btn btn-primary rounded-pill ${selectedCity === 'Paris' ? 'active' : ''}`}
                                >
                                    Paris
                                </button>                <button
                                    onClick={() => filterCardsByCity('London')}
                                    className={`btn btn-primary rounded-pill ${selectedCity === 'London' ? 'active' : ''}`}
                                >
                                    London
                                </button>
                            </div>
                            {/* right buttons col  */}
                            <div className="col col-4   d-flex justify-content-end align-items-center">
                                <button onClick={viewAllCards} type="button" className="btn btn-outline-info rounded-pill">View All</button>
                            </div>
                        </div>
                        {/* filter buttons end */}

                        {/* card container */}
                        <div className="row  " >
                            <div className="col-12 " >
                                <div className="row  mt-3 d-flex justify-content-center gap-5" >

                                    {/* card */}
                                    {cardData.filter(item => !selectedCity || item.city === selectedCity).slice(0, visible).map((item) => {
                                        return (

                                            <div
                                                key={item.id}
                                                onClick={() => {
                                                    dispatch(setSelectedCard(item.id)); // Dispatch action when card is clicked
                                                    navigate(`/card/${item.id}`);
                                                }}
                                                className="col col-sm-6 col-lg-3  rounded box-shadow-1" style={{ height: '500px' }}>

                                                <Card item={item} />
                                            </div>
                                        )
                                    })}
                                    {/* card end */}

                                </div>

                                <div className='text-center m-3'>
                                    <button onClick={showAllcards} type="button" className="btn btn-primary rounded-pill">Show More</button>
                                </div>

                            </div>

                        </div>
                        {/* card container end */}

                    </div>

                </div>
            </div>
        </>
    );
}

export default Home;