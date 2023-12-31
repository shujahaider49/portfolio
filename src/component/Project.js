import React from 'react'
import { Fade } from 'react-reveal';


const Project = () => {

  const posts = [
    {
        title: "Random Quote Generator",
        desc: "Experience daily inspiration with my React.js-powered Random Quote Generator! This web application delivers a fresh dose of wisdom and motivation with every click. Explore a vast collection of thought-provoking quotes from various sources, igniting your creativity and lifting your spirits.",
        img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        href: "https://shujahaider49.github.io/quote-gene-web/"
    },
    {
        title: "Weather App",
        desc: "Elevate your day with my React.js-powered Weather Web App! Get up-to-the-minute weather forecasts, accurate local conditions, and detailed forecasts for any location. Stay informed with a beautiful and intuitive user interface that makes checking the weather a breeze.",
        img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        href: "https://shujahaider49.github.io/weather-app/"
    },
    {
        title: "Admin Dashboard",
        desc: "Empower your business with my React.js-driven Admin Dashboard! Seamlessly manage and visualize critical data, track key performance indicators, and make informed decisions with ease.",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        // href: "javascript:void(0)"
    },  
   
]


  return (
  <>
   <section id='projects' className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-center">
                <h1 className="text-3xl text-white font-semibold">
                    My <span className='text-cyan-600'> Projects </span>
                </h1>
                <p className="mt-3 text-white">
                Explore my latest React.js project, blending innovation with functionality.                </p>
            </div>
            <div className="mt-12 grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
              <Fade bottom>
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-500 hover:shadow-sm" key={key}>
                            <a target='blank' href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48  rounded-t-md" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-2xl text-white mb-9">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>
                            </a>
                        </article>
                    ))
                }
                </Fade>
            </div>
        </section>
  </>
  )
}

export default Project