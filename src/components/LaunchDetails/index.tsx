import React, { useEffect } from 'react';
import {useLaunchesQuery} from '../../generated/graphql';
import LaunchDetails from './LaunchDetails'

interface OwnProps {
    id: number
}

const LaunchDetailsContainer = ({id}: OwnProps) => {
    const { data, loading, error, refetch } = useLaunchesQuery({variables: {id: String(id)}});
    useEffect(() => {
        refetch();
    }, [id])
    if(loading) return <div>Data is loading</div>

    if(error) return <div>Error</div>

    if(!data) return <div>Please select mission to see it's details</div>

    return <LaunchDetails data={data} />
}

export default LaunchDetailsContainer;
