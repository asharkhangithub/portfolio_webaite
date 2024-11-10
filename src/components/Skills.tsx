import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className="grid md:grid-col-2 gap-20 items-center">
        <div data-aos="flip-up">
            <h3 className='text-4xl md:text-5xl' >My Experties</h3>
            <p className='text-black-500 pt-2'> I have a strong command over front-end technologies, including HTML and CSS, which allow me to create visually engaging and responsive web designs. My expertise in TypeScript enhances my ability to write scalable and maintainable code, bringing both efficiency and type safety to my projects. Additionally, my proficiency with GitHub ensures seamless version control and collaboration, enabling me to manage code effectively and contribute to team-oriented development environments.</p>
        </div>
        <div>
        <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl gap-4">
  <div className="space-y-2">
    <h2 data-aos="flip-up">HTML</h2>
    <h2 data-aos="flip-up">CSS</h2>
    <h2 data-aos="flip-up">JAVASCRIPT</h2>
  </div>
  <div className="space-y-2">
    <h2 data-aos="flip-up">TYPESCRIPT</h2>
    <h2 data-aos="flip-up">BOOTSTRAP</h2>
    <h2 data-aos="flip-up">GITHUB</h2>
  </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default Skills
