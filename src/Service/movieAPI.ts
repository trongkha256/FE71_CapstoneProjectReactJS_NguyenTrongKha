import { Movie } from "../interface/movie";
import axiosClient from "./axiosClient";

const movieAPI = {
    getMovieShowing: () => {
        return axiosClient.get<Movie[]>("QuanLyPhim/LayDanhSachPhim");
    },
    getMovieDetails: (movieId: string) => {
        return axiosClient.get<Movie>("QuanLyPhim/LayThongTinPhim"),
        {
            params: {
                maPhim: movieId,
            },
        }
    }
}
export default movieAPI;