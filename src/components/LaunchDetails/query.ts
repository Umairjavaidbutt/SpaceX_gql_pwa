import gql from 'graphql-tag'

export const QUERY_LAUNCH_DETAILS = gql `
        query launches($id:String!){
        
            launch(id: $id) {
                details
                    launch_site {
                        site_name
                        }
                    launch_year
                    launch_success
                    rocket {
                        rocket_type
                        rocket_name
                        }
                    links {
                        video_link
                        flickr_images
                        }
                    mission_name
                
            
            }
            
        }
`;