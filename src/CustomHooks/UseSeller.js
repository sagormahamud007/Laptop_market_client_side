import { useEffect, useState } from "react"

const UseSeller = (email) => {
    const [seller, setSeller] = useState(false)
    const [sellerLoading, setSellerLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://used-product-laptop-market-server.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setSeller(data.isSeller);
                    setSellerLoading(false);
                })
        }
    }, [email])

    return [seller, sellerLoading]
};

export default UseSeller