import axios from "axios";
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
    },
    addMovie: (movie: any) => {
        //KHi dữ liệu lên sv là file-> thành dạng multipart/form-data
        const formData=new FormData();
        for (let key in movie){
            formData.append(key,movie[key])
        }
        formData.append("maNhom","GP01");

        return axiosClient.post("QuanLyPhim/ThemPhimUpLoadHinh", formData)
    }
}
export default movieAPI;