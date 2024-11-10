import React from 'react'
import Heading from './heading'
import Card from './Card'
// import Hero from './hero'

const data = [
    {
        id : 0,
        title :"Resume builder",
        desc:"build by using html,css,typescript",
        img:"/capture1.PNG",
        tags:["node","css","typescript"]
    },

    {
        id : 1,
        title :"watch website",
         desc:"build by using html,css,typescript",
         img:"/capture2.PNG",
         tags:["node","css","typescript"]
    },

    {
        id : 2,
        title :"E-commerce website",
         desc:"build by using html,css,typescript",
         img:"/capture3.PNG",
         tags:["node","css","typescript"]
    }
]

const Project = () => {
  return (
    <div id='project' className='container pt-32'>
      <Heading title='My Projects' />
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-y-10 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  )
}

export default Project