export const pageview = (url) => {
    if (windows !== undefined) {
        windows.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ,{
            page_path:url ,
        })
    }
}
export const event =({ action , params }) =>{
    if (windows !== undefined) {
        windows.gtag("event" , action, params)
    }
}