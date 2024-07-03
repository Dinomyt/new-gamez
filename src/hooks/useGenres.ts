// import { useState, useEffect } from "react";
// import apiClient from "../Service/apiClient";
// import { CanceledError } from "axios";

import useData from "./useData";

export interface FetchGenreResponse {
    count: number
    results: Genre []
}

export interface Genre {
    id: number;
    name: string;
    image_background: string
}

const useGenres = () => useData<Genre>('/genres')

export default useGenres