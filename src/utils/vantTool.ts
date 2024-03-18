import { showToast, showSuccessToast, showFailToast } from 'vant'; 


export const message = {
    success :( msg : string , position? : 'top' | 'bottom'  ) => {
        showSuccessToast({
            message: msg,
            position,
        })
    },
    info :( msg : string , position? : 'top' | 'bottom'  ) => {
        showToast({
            message: msg,
            position,
        })
    },
    fail :( msg : string , position? : 'top' | 'bottom'  ) => {
        showFailToast({
            message: msg,
            position,
        })
    },
}