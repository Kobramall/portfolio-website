import Head from 'next/head'
import { BsFillMoonStarsFill, BsMoonStars } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai'
import Image from "next/image";
import ProfPhoto from '../public/ProfessionalPhoto.jpg';
import design from '../public/React.jpg'
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Kolten Bramall Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-black'>
         <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>developed by Kolten Bramall</h1>
            <ul className='flex items-center'>
              <li>
                {darkMode ? <BsMoonStars onClick={() => setDarkMode(!darkMode)} className="bg-white h-6 w-6" /> : <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:bg-white'/> }
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-400 text-white text-sm px-4 py-2 rounded-md ml-8' href="https://docs.google.com/document/d/1lgiV3EPEmVlzx-UGieZEF6rcup2qM_2HX3_UXqJQWHM/edit">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-cyan-500 font-medium md:text-6xl'>Kolten Bramall</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Full Stack Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl md:max-w-xl md:mx-auto dark:text-white'>Looking for my first job in tech! I have experience with Javascript, Html, CSS, and React for the frontend, 
              along with Node.js and SQL for the Backend.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
            <a href="https://www.linkedin.com/in/kolten-bramall-b3aa24235/"><AiFillLinkedin /></a>
             <a href='https://github.com/Kobramall'><AiFillGithub /></a>
            <a href="https://www.facebook.com/kolten.bramall.5"><AiFillFacebook /></a>
          </div>
          <div className='relative mx-auto  rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 '>
            <Image src={ProfPhoto} alt="filler"  layout="fill" objectFit='cover'/>
          </div>
         </section>
          
          <section>
            <div className='text-center pt-10' >
              <h3 className='text-3xl py-1' >Services I offer</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
                Lorem ipsum dolor, sit <span className='text-teal-500'>amet</span> consectetur adipisicing elit.
                libero, ratione <span className='text-teal-500'>eveniet</span> magni quasi alias! Laborum!
                </p>
                <p className='text-sm py-2 leading-8 text-gray-800  dark:text-white'>
                Lorem ipsum dolor, sit <span className='text-teal-500'>amet</span> consectetur adipisicing elit.
                libero, ratione <span className='text-teal-500'>eveniet</span> magni quasi alias! Laborum!
                </p>
            </div>
            <div className='lg:flex gap-10'>
            <div className='bg-gradient-to-r from-orange-600 to-orange-400 text-center content-center shadow-lg p-10 rounded-xl my-10'>
                 <Image src={code} alt="design" width={100} height={100} />
                 <h3 className='text-lg font-medium pt-8 pb-2'>Useful Experience</h3>
                 <p className='py-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quas obcaecati, ut facilis veniam cumque, fugiat
                 </p>
                 <h4 className='py-4 text-teal-600'>Examples</h4>
                 <p className='text-gray-800 py-1'>Family Promise Application (link below)</p>
                 <p className='text-gray-800 py-1'>BloomTech Certification</p>
                 <p className='text-gray-800 py-1'>Rock-Paper-Scissors Website (Redux)</p>
                 <p className='text-gray-800 py-1'>Etc</p>
              </div>
              <div className='bg-gradient-to-r from-orange-600 to-orange-400 text-center content-center shadow-lg p-10 rounded-xl my-10'>
                 <Image src={design} alt="design" width={100} height={100} className="rotate-180"/>
                 <h3 className='text-lg font-medium pt-8 pb-2'>Frontend Designs</h3>
                 <p className='py-2 '>
                   I have worked on several frontend projects. I very much enjoy designing and 
                   programming good looking websites
                 </p>
                 <h4 className='py-4 text-teal-600'>Languages</h4>
                 <p className='text-gray-800 py-1'>React.js</p>
                 <p className='text-gray-800 py-1'>JavaScript</p>
                 <p className='text-gray-800 py-1'>Html</p>
                 <p className='text-gray-800 py-1'>CSS</p>
                 <p className='text-gray-800 py-1'>Etc</p>
              </div>
              <div className='bg-gradient-to-r from-orange-600 to-orange-400 text-center content-center shadow-lg p-10 rounded-xl my-10'>
                 <Image src={consulting} alt="design" width={100} height={100} />
                 <h3 className='text-lg font-medium pt-8 pb-2'>Backend functionality</h3>
                 <p className='py-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quas obcaecati, ut facilis veniam cumque, fugiat
                 </p>
                 <h4 className='py-4 text-teal-600'>Languages</h4>
                 <p className='text-gray-800 py-1'>Node.js</p>
                 <p className='text-gray-800 py-1'>Axios</p>
                 <p className='text-gray-800 py-1'>SQL</p>
                 <p className='text-gray-800 py-1'>Express</p>
                 <p className='text-gray-800 py-1'>Etc</p>
              </div>
            </div>
          </section>
         <section>
          <div className='text-center'>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 text-center  dark:text-white'>
                Lorem ipsum dolor, sit <span className='text-teal-500'>amet</span> consectetur adipisicing elit.
                libero, ratione <span className='text-teal-500'>eveniet</span> magni quasi alias! Laborum!
                </p>
            <p className='py-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quas obcaecati, ut facilis veniam cumque, fugiat
                 </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'><a href="https://github.com/Kobramall"><Image src={web1} alt="website1" className='rounded-lg object-cover h-100% w-100%'layout='responsive'/></a></div>
              <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover h-100% w-100% ' src={web2} alt="website2"layout='responsive'/></div>
              <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover h-100% w-100%' src={web3} alt="website3" layout='responsive'/></div>
              <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover h-100% w-100%' src={web4} alt="website4" layout='responsive'/></div>
              <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover h-100% w-100%' src={web5} alt="website5" layout='responsive'/></div>
              <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover h-100% w-100%' src={web6} alt="website6" layout='responsive'/></div>
          </div>
         </section>
      </main>
    </div>
  );
}
