import toast from "react-hot-toast";

export function successToast (message){
    toast.success(message);
}

export function errorToast (message){
    toast.error(message);
}