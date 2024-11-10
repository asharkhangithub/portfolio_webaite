import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
import { BsFillTelephoneInboundFill } from "react-icons/bs";


const Contact = () => {
  return (
    <div  id='contact' className='pt-32 container'>
        <div className='grid md:grid-col-2 gap-10'>
            <div className="space-y-8">
                <h2 className='text-5xl' data-aos="flip-up">CONTACT ME</h2>
                <div className='flex gap-3 items-center' data-aos="flip-up">
                    <MdOutlineAttachEmail size={25}/>onlyforashar12@gmail.com
                </div>
                <div className='flex gap-3 items-center'data-aos="flip-up">
                    < BsFillTelephoneInboundFill size={25}/>03020205360
                </div>
                <div className='space-y-8'>
                    <div className='flex flex-col gap-1' data-aos="flip-up">
                        <label htmlFor="name">Name</label>
                        <input type="text" className='h-[40px] bg-transparent border border-accent'id='name' />
                    </div>

                    <div className='flex flex-col gap-1' data-aos="flip-up">
                        <label htmlFor="e-mail">E-MAIL</label>
                        <input type="text" className='h-[40px] bg-transparent border border-accent'id='e-mail' />
                    </div>

                    <div className='flex flex-col gap-1' data-aos="flip-up">
                        <label htmlFor="msg">Message</label>
                        <textarea className=' bg-transparent border border-accent'id='msg' rows={8} >
                            </textarea>
                    </div>
                </div>
                <button className='bg-accent p-2 px-6' data-aos="flip-up">Submit</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact

