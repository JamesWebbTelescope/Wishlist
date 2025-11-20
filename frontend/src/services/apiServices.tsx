import type {WishData} from '../types/Types'

export const GetWishes = async (url: string) => {
    try{
        const res = await fetch(`${url}/api/wishlist`)
        const data = await res.json()
        let wishes: Array<WishData> = []
        for(let i = 0; i < data.length; i++)
        {
            const wish: WishData = {} as WishData
            wish.id = data[i]["ID"]
            wish.price = data[i]["price"]
            wish.name = data[i]["name"]
            wish.link = data[i]["link"]
            wishes.push(wish)
        }
        return Array.isArray(wishes) ? wishes: []
    }
    catch(error){
        console.log("Error fetching wishes:", error);
        return [];
    }    
}
