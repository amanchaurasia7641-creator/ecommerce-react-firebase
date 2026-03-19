/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-pink-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://scontent.cdninstagram.com/v/t51.29350-15/343130720_976698847108064_6086436811403705845_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=Wq4oPPgql4IQ7kNvwH-Roqb&_nc_oc=AdkkuNNx5t7yudxAocVIhghj1Btz4acsFlL-jZEo-xQA9OivMptFlOMSsyVPj0eI00RpPI94E8vu3ic8g50PZdXm&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=iuLQRuJTtw2P2LZH4T7Odg&_nc_ss=8&oh=00_Afzgi8pxFK3GGzuf_Kb1NRPLcgFuLXOkGqbJ1DDDJsGVow&oe=69C0A6C1" />
                                <p className="leading-relaxed">The website is very easy to use and the checkout process is smooth. I really liked the design and how quickly I found what I needed.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Aman Chaurasia</h2>
                                <p className="text-gray-500">Devloper</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.devknus.com/img/gawri.png" />
                                <p className="leading-relaxed">I had a great experience shopping on this website. The interface is clean, products are well organized, and the delivery was faster than expected. Highly recommended.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">S Mishra</h2>
                              
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://firebasestorage.googleapis.com/v0/b/devknus-official-database.appspot.com/o/images%2FScreenshot%202023-07-07%20at%202.20.32%20PM-modified.png?alt=media&token=324ddd80-2b40-422c-9f1c-1c1fa34943fa" />
                                <p className="leading-relaxed">Amazing quality products at affordable prices. Customer support was also very responsive. I will definitely shop again!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">XYZ </h2>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial