export interface loginValues{
email:string,
userName:string,
password:string,
}

export interface CustomInputProps{
    name:string,
    label:string,
    type:string,
    row?:number,
    formik:any,
    options?:never[]
}

export interface AuthStore{
    loading:boolean,
    error:string | null,
    name:string,
login:string | null,
  role: "admin" | "user" | null;

setLoading:(loading:boolean)=>void,
setError:(error:string | null)=>void,
setName:(name:string)=>void
setLogin:(login:string | null)=>void
  setRole: (role: "admin" | "user" | null) => void;
  logoutUser?: () => void;
//   clearError: () => void;
}

export interface UserActions {
  logoutUser: () => void;  
  clearError: () => void;
}
