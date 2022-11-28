import { useEffect, useState } from "react"

const useToken = (email) => {
    const [token, setToken] = useState('')

    //get jwt token
    useEffect(() => {
        if (email) {
            fetch(`https://used-product-laptop-market-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.token) {
                        localStorage.setItem('Access-token', data.token)
                        setToken(data.token)
                    }
                })

        }
    }, [email])
    return [token]
}
export default useToken;