import React from 'react';
import {useLaunchQuery} from '../../generated/graphql';

import Launch from './Launch'
import {OwnProps} from './Launch'

const LaunchContainer = (props:OwnProps) => {
    const {data, error, loading} = useLaunchQuery();

    if (loading) return <div>Data is loading</div>

    if (error || !data) return <div>Error || Network Failure</div>

    return <Launch data={data} {...props}/>
}

export default LaunchContainer;