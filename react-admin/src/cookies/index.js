
import cookie from 'react-cookies'


export const saveCookie = (name, data, expiration=new Date(new Date().getTime() + 24 * 3600 * 1000*7)) => {
    cookie.save(name, data, {
        expires: expiration
    })
    console.log('addd', name, data, expiration)
}

export const fetchCookie = (name) => {
    return cookie.load(name)
}

export const removeCookie = (name) => {
    cookie.remove(name)
}