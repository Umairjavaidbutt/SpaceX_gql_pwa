import React from 'react';
import { LaunchQuery } from '../../generated/graphql'
import './styles.css';

export interface OwnProps {
    handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps{
    data: LaunchQuery
}

const Launch: React.FC<Props> = ({ data, handleIdChange }) => {
    return <div className='Launches'>
        <h3>SpaceX Launches</h3>
        <ol className='LaunchesOl'>
            {!!data.launches && data.launches.map(
                (launch, i) => !!launch && (
                    <li key={i} className='LaunchItem' onClick={() => handleIdChange(launch.flight_number!)}>  
                        {launch.mission_name} - {launch.launch_year} ({JSON.stringify(launch.launch_success)})
                    </li>
                )
            )}
        </ol>
    </div>;
}

export default Launch;
