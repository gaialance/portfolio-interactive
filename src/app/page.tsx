'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from  './page.module.scss'

export default function Home() {

  const pages = ['Web Page', 'Web Design' , 'Seo Guide','Contact Me']
  const content = [
    `I will help you make your
    design into a web page and
    advices on how certain features
    can work together very well `,
    `You can tell me roughly how you
    want your design and I will come
    up with a design that fit your needs.` ,
    `Figuring out why your content is not
    reaching the audience that you need?
    Come explore together and understand.`,
    `You can contact me via Email at 
    nicholashowaiken@gmail.com`]

  const [currentIndex, setCurrentIndex] = useState(-1)

  const [showButton, setShowButton] = useState(true)

  const handleClick = (index:number) => {
    setCurrentIndex(index);
  }

  const handleButton = () => {
    setShowButton(!showButton)
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Image  src="/oceanPic.png" height={1348} width={1011} alt="ocean" priority/>
        {currentIndex == -1 && (
          <>
            <div className={styles.mainHeader}>
              <h3>Welcome</h3>
            </div>
            <div className={styles.border}></div>
            <div className={styles.subHeader}>
              {pages.map((_result,index) =>{
                return (
                <>
                <h2 key={index} onClick={()=>handleClick(index)}>{_result}</h2>
                </>)
              })}
            </div>
          </>
        )}
        {currentIndex > -1 && (
          <>
            <div className={styles.mainHeader}>
              <h3>{pages[currentIndex]}</h3>
            </div>
            <div className={styles.border}></div>
            <div className={styles.subHeader} style={{width:"600px"}}>
              <h4>
                {content[currentIndex]}
              </h4>
            </div>
          </>
        )}
        <div>
          <h1>Nicholas Ho</h1>
        </div>
        <button className={styles.bottomButton} onClick={()=>handleButton()}>
            <p className={`${showButton? styles.showAnimation:""}`}>Click me</p>
        </button>
        {!showButton && (
          <h4 className={styles.navigationText} onClick={()=>handleClick(-1)} >Home</h4>
        )}

        <h4 className={styles.mobileNavigation} onClick={()=>handleClick(-1)} >Home</h4>
       
      </div>
      <div className={styles.rightContainer}>
        <Image  src="/oceanPic.png" height={1348} width={1011} alt="ocean" priority/>
        <h1>
          Fullstack Developer , Web Design , Seo guideline , Brand Design
        </h1>
      </div>
    </div>
  )
}
