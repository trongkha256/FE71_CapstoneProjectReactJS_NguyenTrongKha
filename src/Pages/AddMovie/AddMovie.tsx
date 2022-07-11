import React from 'react'
import { useForm } from 'react-hook-form'
import movieAPI from 'Service/movieAPI';

interface MovieValues {
    tenPhim: string;
    biDanh: string;
    trailer: string;
    hinhAnh: FileList;
    moTa: string;
    ngayKhoiChieu: string;
}

type Props = {}

const AddMovie = (props: Props) => {
    const { register, handleSubmit } = useForm<MovieValues>({
        mode: "onTouched",
    })
    const onSubmit = async (values: MovieValues) => {
        const payload = { ...values, hinhAnh: values.hinhAnh[0] }
        try {
            await movieAPI.addMovie(payload);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Add Movie</h1>
                <div>
                    <input type="text" placeholder='Tên Phim' {...register("tenPhim")} />
                </div>
                <div>
                    <input type="text" placeholder='Bí Danh' {...register("biDanh")} />
                </div>
                <div>
                    <input type="text" placeholder='Mô Tả' {...register("moTa")} />
                </div>
                <div>
                    <input type="text" placeholder='Trailer' {...register("trailer")} />
                </div>
                <div>
                    <input type="file" placeholder='Hình Ảnh' {...register("hinhAnh")} />
                </div>
                <div>
                    <input type="text" placeholder='Ngày Khởi Chiếu' {...register("ngayKhoiChieu")} />
                </div>
                <button>Thêm Phim</button>
            </form>
        </div>
    )
}

export default AddMovie