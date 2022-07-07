import { useForm, FieldErrors } from "react-hook-form"

type Props = {}
interface LoginValues {
  taikhoan: string;
  matkhau: string;
}
const Login = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginValues>({
    defaultValues: {
      taikhoan: "",
      matkhau: "",
    },
    //mode: cách validation
    mode: "onTouched"
  })
  const onSubmit = (value: LoginValues) => {
    console.log(value)
  }
  const onError = (error: FieldErrors<LoginValues>) => {
    console.log(error)
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <label>Tài Khoản</label>
          <input type="text" {...register("taikhoan", {
            required: {
              value: true,
              message: "Tài khoản không được để trống"
            },
            // pattern: /^[a-zA-Z0-9]{5,}$/,
            pattern: {
              value: /^[a-zA-Z0-9]{5,}$/,
              message: "Tài khoản không đúng định dạng"

            },
          })
          }></input>
          {errors.taikhoan && <span>{errors.taikhoan.message}</span>}
        </div>
        <div>
          <label>Mật Khẩu</label>
          <input type="text" {...register("matkhau", {
            required: {
              value: true,
              message: "Mật khẩu không được để trống"
            },
            // pattern: /^[a-zA-Z0-9]{5,}$/,
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "Mật khẩu không đúng định dạng"

            },
          })
          }></input>
          {errors.matkhau && <span>{errors.matkhau.message}</span>}
        </div>
        <button>Đăng nhập</button>
      </form >
    </div >
  )
}

export default Login