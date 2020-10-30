import React from 'react';
import {LaunchesQuery} from '../../generated/graphql';
import './styles.css';

interface Props {
    data: LaunchesQuery
}

const LaunchDetails: React.FC<Props> = ({data}) => {
    if (!data.launch) return <div>Launch unavailable</div>

    return <div className='LaunchDetails'>
        <div className='LaunchDetailsStatus'>
            <span>Year {data.launch?.launch_year}</span>
            <h2>{data.launch.mission_name} - {data.launch.rocket?.rocket_name}</h2>
            <p>Site: {data.launch.launch_site?.site_name}</p>
            <p>{data.launch.details}</p>
            {!!data.launch.links && !!data.launch.links.flickr_images && 
            (
                <div className='LaunchProfile__image-list'>
                    {data.launch.links.flickr_images.map(image =>
                        image ? <img className='LaunchProfile__image' src={image} alt={data.launch?.rocket?.rocket_name!}/> : null
                        )}
                </div>
            )}
        </div>
    </div>
}

export default LaunchDetails;