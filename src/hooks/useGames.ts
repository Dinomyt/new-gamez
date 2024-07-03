// import { useState, useEffect } from "react";
// import apiClient from "../Service/apiClient";
// import { CanceledError } from "axios";

import { GameQuery } from "../App";
import useData from "./useData"
import { Platform } from "./usePlatforms"

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}
  
export interface FetchGameResponse {
    count: number
    results: Game []
}

const useGames =    ( gameQuery:GameQuery
                    ) => useData<Game>('/games',    {  params:  {   genres:gameQuery.genre?.id, 
                                                                    parent_platforms:gameQuery.platform?.id,
                                                                    ordering:gameQuery.sortOrder,
                                                                    search:gameQuery.searchText,                                                  
                                                                }
                                                    }, 
                                                    [   gameQuery      
                                                    ]
                    )

export default useGames