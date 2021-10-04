import React, { useEffect, useState } from 'react';
import AllService from '../AllService/AllService';
import './AllServices.css';

const AllServices = () => {

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('servicesAllData.json')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])

    return (
        <div>
            <h2>fao  {allServices.length}</h2>

            <div className="allService-style">
                {
                    allServices.map(allService => <AllService
                        key={allService.key}
                        allService={allService}
                    ></AllService>)
                }
            </div>

        </div>
    );
};

export default AllServices;