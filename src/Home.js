import React from 'react'
import "./Home.css";
import Course from './Course';


function Home() {
  
    return (
       <div class="home">
       <div className="home__container">
           
            <div className="home__caption">
        <h1>Aspire for more</h1>
        <p>Learning keeps you in the lead. </p>
        <p>Get in-demand skills to impress anyone.</p></div>
            <img className="home__img" src="https://img-c.udemycdn.com/notices/featured_banner/image_udlite/1999ee6d-47cd-42f2-baca-747713a0228b.jpg?Expires=1622315124&Signature=buB65Yx6dWRdpVMKe-gTpUYjALuKXtaMJIAu3HIxJFZdO-4JKimi8NwYyIn~xAgVIlkJCRJrwYifb4a75kjTSufYDKmfgiW8MyDIg5gF-oFOC1C-99Z38nYMQ3~vhrAqGSKTh4IjpptURgiQme3dia8vxe~l9BQBtN-WY9w8-esw~Sqe4D5gCjM-UykhcI5C7~aTR5kGQydSTAWOkryNNY7cP~vi2GlPBlCbYc0b90QeDdWH-tbX22cqjkdpqEOSWYFbtFdGm0JAzE~6Voji3KCAXmBwLacLXbdB0lJF9L9crQTrDfj~brasUwENZpEK8UsHknjF8CyNnp8HobV8Mg__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
        alt="" />
         <h1 className="home__text">Let's start Learning</h1>
         <h1> What to learn next?</h1>
        <h1>Top Courses in Web development</h1>
         {/*  ---------------------first productrow* ----------------*/}
         < div className="home__row">
            {/*course1*/}
            <Course
            id="121"
            image="https://img-c.udemycdn.com/course/240x135/1026604_790b_2.jpg?Expires=1622349972&Signature=imP~D4f~gpyZH--54z0RtMJ-oSLR0Hp6u6oswn6Kw3yzG9gk9DhJwYw3S3tRRcwsKqk2rMpOscG8xcDAI2LBVKFUCQl6g~FP7cgljptSGzXEP1dwPKvaLiWbv9AWjhuZjIuS9T3LZbJF49QRUTwWjq3bLXj5JK1F2vvmzRwn~2~dcUXeH9dkvzviRNWRfxDT3Wj87-8ky3f2CVHsRRVGp0j0QBkRdHsP2Xg5mXIXgjS8oBwyuxUAHTmcvSEFzFEA0oAXCj6aFuT0kL3jv-m~3gqlcksGOzz1pLVy2hNTMqi48MHZBB4E4yJrTTrOZPclBIuaoagSYhwzLcdGpNYtAQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A" 
            title="Advance css and sass:Flexbox,Grid,Animations"
            rating={5}
            price={100} /> 
          {/*course2*/}
          <Course
            id="49538094"
            image="https://img-b.udemycdn.com/course/240x135/1565838_e54e_12.jpg?secure=z-ya5dXGz6YeJ2J_ctEh8w%3D%3D%2C1622309323"
            title="The Complete 2021 Web Development Bootcamp"
            rating={4}
            price={239.0}
        
          />
          {/*course3*/}
        
           <Course
            id="121"
            image="https://img-b.udemycdn.com/course/240x135/1010586_b622_3.jpg?secure=3un7ZQpx_QOJr04rpBEPuQ%3D%3D%2C1622325755"
            title="Become a word press developer Unlocking power with code"
            rating={5}
            price={100}
         /> 
           {/*course4*/}
           <Course
            id="121"
            image="https://img-c.udemycdn.com/course/240x135/947098_02ec_2.jpg?Expires=1622336891&Signature=NDkZkWgVztD6pAlV-Ikbgqnpfb--tvAEad1MaRcjWcGsgGleZ1kQfi5zhJUQUgKdveFw8dc5dPiXiW65KNmcv338Z89FchPAWpZLJiZBQVKzF8vNzYNutzYcLjOwHfiOBBDuIboId4723qp8G0HrlYjfhjNWVqEAXqETV57j3AUsVY4~DV1QUr6JGEajjWjhn8Mz-rjVAiwg21MIxnopEILg97YSDXIijU~GKtsbn7nw4K4zxA1TnW48C0lIA-x1ZpxMdZJgxR7o5Bp7~Noqi~wpAzeEdtJ1sbIIwo8C3RjMmLUeSHhS~o3A1H2HemQ2U4uX8PFpbZyRDrvqw77GHg__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
            title="Understanding Typescript-2021 Edition"
            rating={5}
            price={100}
         /> 
         {/*course5*/}
         <Course
            id="121"
            image="https://img-c.udemycdn.com/course/240x135/1313502_b57f_2.jpg?Expires=1622339716&Signature=Sz~xcd9XevLBQJjUqGWfwwJNTzpRVvvHR4ru3V6HPQ94mSq0VOWxclPk-BBTO4jac~zolyrq2veR4PHaL0-yybFEpweva0Xkc1UUAgNSMCbzck4b5e-N9FtFuBVHu2wM8~4TSEQ90Uw6rd3EySOKssH85gWP3QxerzPBbD8dG~gXmtlJgOMO7BX6PFlWEv2fRlY1vRnyBNhIobsB3y54IEfERqnNkc6pfO5WYS1Jk1~f5WJdOFzKN4Hmm57iPHreyOv5tNAHAkMYlA~fhlDpkM4duqTAPRYmdGyQgqiQTY1atioxUjcKXYDyjFapbJqEUjA3qjMy5Yp8Hi6H8x2~dw__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
            title="Bootstrap 4 From Scratch With 5 Projects"
            rating={5}
            price={100}
         /> 
          </div>
           {/*  ---------------------second course row* ----------------*/}
           <div div className="home__row">
            {/*course1*/}
            <Course
            id="121"
            image="https://img-c.udemycdn.com/course/240x135/3977800_5908_2.jpg?Expires=1622342492&Signature=PF8BFhXCDzguK0JKzkS5inaJa5tFTSLXcTVFeGr~kMcsgOKCsmSVDNS4I24ILbMyFvvu2rpb0jwX3Sg7QUF12Bra-bE1UNO9OEbRw2ZERT8nRXO3wT9TXslcnNu6jVUXMT8ibVZubnvNQMu9bEUWsaecHQiqxaXVXHyzUG1s0MtFju74yRW77Q9akle7O4D6rLXLuzHpsE2X0xpL2tY6fSaEhaz~cLufEbr48Gt--wmzPeHEOjLryw85~4ZBnjzTRDb8lICkZigMbBZuAWix5bdcEwEWxzUvJjWcqosFnCZoAdNtw1nZwVv7HcIITBaWLujxEPvkLH4kufiP5DnKPg__&Key-Pair-Id=APKAITJV77WS5ZT7262A" 
            title="The Data Science MicroDegree: Data Analysis &amp; Visualization"
            rating={5}
            price={100} /> 
          {/*course2*/}
          <Course
            id="49538094"
            image="https://img-c.udemycdn.com/course/240x135/4025750_9a58_2.jpg?Expires=1622349211&Signature=GZWb4NZrJrk9wKSZEICQj7-CR4G1rd5EU7OymidbdmbDt8FVhFrWmqo02zG3vOldtzzro9FW1WdK-s6eVRII8cPziazoT77-d3UJ3mA8Mv7o6ItcQ-YrQ2omulsbN1kuhBAkHBOuHqypdUq5FsbOWXnuQIHPfL8MEVewXsDaPjwicBHq8oSSUCveEEGooL6epVw6DUZAbcbXcUqjANluPjUg6KMG7aUs8ztcxoaSvF2M8kNKXH0jInzK09386VjYQJl3MxTR49etHD4fG7L1uh9HAiBjyDYTHV6eiTBONvtMPVm93rTc0T4YPEcKxwXZ-cSm2fBdXG8i~u-qqvxa0Q__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
            title="Learn Datascience and Machine learning"
            rating={4}
            price={239.0}
        
          />
          {/*course3*/}
        
           <Course
            id="121"
            image="https://img-c.udemycdn.com/course/240x135/3981704_4e03_2.jpg?Expires=1622360808&Signature=WfUuQqG4nOa~~tdti2c~2VHZsui6qqo0ySwJaGnK0Q3J-VsMaLBu7vyUDLLtl5PruokYkPMgPH~w9mIq0n70Arr65G7tqnQt9ULAW3UBxhhNh9-gAYBOV~wNXUDaV040PEAld4Ywh0Yr2CQNUs8xi1bpe13jG4NxnexEtS~yJrsEJNYJD5e72ORCCjFz0RJx-MBevSoWTnlgwH8H0KW8lutEJ4eMiF5lxfXylnKC8NorkTGUp17-5MRKCiPIsGNBHfzvqPfDExBx0iwZc4BHycixeT4M2OS4~jsWCTdDs1fRSRSjzBsvusvEqVlvjjT3KJBaJfJuf1Gs8Yt-lkeQ~Q__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
            title="Practical Deep Learning: Real World Deep Learning Projects."
            rating={5}
            price={100}
         /> 
           {/*course4*/}
           <Course
            id="121"
            image="https://img-b.udemycdn.com/course/240x135/3692428_b767_9.jpg?secure=key0c8BKePZjoQD3annM8g%3D%3D%2C1622350952"
            title="Data cleansing master class in python"
            rating={5}
            price={100}
         /> 
         {/*course5*/}
         <Course
            id="121"
            image="https://img-c.udemycdn.com/course/240x135/1313502_b57f_2.jpg?Expires=1622339716&Signature=Sz~xcd9XevLBQJjUqGWfwwJNTzpRVvvHR4ru3V6HPQ94mSq0VOWxclPk-BBTO4jac~zolyrq2veR4PHaL0-yybFEpweva0Xkc1UUAgNSMCbzck4b5e-N9FtFuBVHu2wM8~4TSEQ90Uw6rd3EySOKssH85gWP3QxerzPBbD8dG~gXmtlJgOMO7BX6PFlWEv2fRlY1vRnyBNhIobsB3y54IEfERqnNkc6pfO5WYS1Jk1~f5WJdOFzKN4Hmm57iPHreyOv5tNAHAkMYlA~fhlDpkM4duqTAPRYmdGyQgqiQTY1atioxUjcKXYDyjFapbJqEUjA3qjMy5Yp8Hi6H8x2~dw__&Key-Pair-Id=APKAITJV77WS5ZT7262A"
            title="Bootstrap 4 From Scratch With 5 Projects"
            rating={5}
            price={100}
         /> 
        </div>
       
        </div>
        </div> 
    )
}

export default Home
