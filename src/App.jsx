import styles from "./index.module.css";
import Menu from "./menu.jsx";
import Canva from "./canva.jsx";
function App(){

  return(
    <>
      <div className={styles.intro}>
        <div className={styles.introText}>
          <h1>Dark Drinkers</h1>
          <h4>For we understand your tastebuds</h4>
        </div>
      </div>
      <h1 className={styles.our_menu} style={{color:"white",textAlign:"center",fontSize:"50px",marginBottom:"50px"}}>Our Menu</h1>
      <div className={styles.menu}>
        <Menu name="Espresso" desc="Experience the bold, rich flavor of our finely crafted espresso—small in size, but big in energy!"/>
        <Menu name="Cappuccino" desc="A perfect balance of espresso, velvety steamed milk, and a cloud of foam—indulge in the classic Italian coffee experience!"/>
        <Menu name="Latte" desc="Smooth, creamy, and irresistibly. Latte blends espresso with steamed milk for a sip of pure bliss!"/>
        <Menu name="Mocha" desc="Chocolate meets coffee in a match made in heaven. Our mocha combines rich espresso, creamy milk, and luxurious cocoa"/>
        <Menu name="Macchiato" desc="A bold espresso with a touch of frothy milk—simple, elegant, and packed with flavor in every sip!"/>
        <Menu name="Flat White" desc="A velvety blend of espresso and microfoam—stronger than a latte, smoother than a cappuccino. The ultimate coffee lover's choice!"/>      
        <Menu name="Cold Brew" desc="Slow-steeped for 12+ hours, our cold brew delivers a smooth, naturally sweet coffee with low acidity and a refreshing kick."/>
        <Menu name="Turkish Coffee" desc="Rich, thick, and brewed to perfection in a traditional copper pot. Our Turkish coffee is a sip of history, with an unforgettable bold taste."/>
      </div>
      <div className={styles.canva}>
          <Canva/>
      </div>
      <div className={styles.footer}>
          <div style={{textAlign:"center",fontSize:"50px"}}>Book your seat now!!! <button className={styles.book}>Book</button></div><br></br><br></br><br></br>
          Contact no.: +91 9876543210<br></br><br></br><br></br>
          Email: abc123@gmail.com<br></br><br></br><br></br><br></br><br></br><br></br>
          <div style={{textAlign:"center"}}>Created by aysh_mzmdr</div>
      </div>
    </>
  )
}

export default App