import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { YelpContext } from '../Context/yelpContext';
import ReactPaginate from 'react-paginate';
import Spinner from './Spinner';

const RestaurantCards = () => {
    const { 
        allRestau, 
        searchInputRestau,
        searchInputLoc, 
        selectedRestau, 
        setSelectedRestau,
        centerMap,
        setCenterMap,
        loading 
    } = useContext(YelpContext);

    
    // Pagination
    const [pageNum, setPageNum] = useState(0);
    const cardsPerPage = 6;
    const pagesVisited = pageNum * cardsPerPage;
    // slice() Methode gibt Ausschnitt Arr zurück
    const displayCards = selectedRestau
        .slice(pagesVisited, pagesVisited + cardsPerPage)
        .map(item => {
            return (
                <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <div className="card">
                    {item && <img src={`https://mini-yelp-api.herokuapp.com/static/img/${item.image}`}  className="card-img-top cardImg" alt="article header"/>}
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <h6 className="blockquote-footer">City: {item.city}</h6>
                            <h6 className="blockquote-footer">Adress: {item.address}</h6>
                            <p className="card-text">{item.description}</p>
                            <div className="text-center linkToRestau">
                                <Link to={`/restaurant/${item.id}`} className="btn-restauTeaser">
                                    <FontAwesomeIcon className="infoIcon" icon={["fas", "info-circle"]}/>
                                    Look in detail
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
    // Math.ceil() gibt die nächste Ganzzahl, die größer oder gleich der gegebenen Zahl ist, zurück.
    const pageCount = Math.ceil(selectedRestau.length / cardsPerPage);
    // ReactPaginate stellt Argument bereit, what I can destructure to {selected}
    const changePage = ( {selected} ) => {
        setPageNum(selected);
    };

    useEffect(() => {
        if(!searchInputLoc || !searchInputRestau) {
            setSelectedRestau(() => allRestau);
        }

        if(searchInputLoc && !searchInputRestau) {
            const newArr = allRestau.filter((item) => item.city.match(searchInputLoc));
            setSelectedRestau(() => newArr);
        }

        if(!searchInputLoc && searchInputRestau) {
            const newArr = allRestau.filter((item) => item.name.match(searchInputRestau));
            setSelectedRestau(() => newArr);
        };

        if(searchInputLoc && searchInputRestau) {
            const newArr = allRestau.filter((item) => item.city.match(searchInputLoc));
            const newArr2 = newArr.filter((item) => item.name.match(searchInputRestau));
            setSelectedRestau(() => newArr2);
        };

    }, [searchInputLoc, searchInputRestau])

    if(loading)
        return <Spinner />;

    return (
        <div className="container mt-5">
            <div className="row">
                {displayCards}
                <ReactPaginate 
                    previousLabel={(<FontAwesomeIcon className='previousBtn' icon={['fas', 'angle-left']}/>)}
                    nextLabel={(<FontAwesomeIcon className='nextBtn' icon={['fas', 'angle-right']}/>)}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBtns'}
                    previousLinkClassName={'previousBtn'}
                    nextLinkClassName={'nextBtn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                />
            </div>
        </div>
    )
};

export default RestaurantCards;