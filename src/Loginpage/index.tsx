
import styles from "./index.module.scss";


const Loginpage=()=>{
    return(
      <div className={styles.container}>
        <div className={styles.loginbox}>
            <h2>Login</h2>
            <p>Welcome back to your paint website</p>

            <input type="email" placeholder="Enter Email"/>
            <input type="password" placeholder="Enter Password"/>

            <span>Don't have an account? Sign Up</span>
        </div>
      </div>  
    )
}


export default Loginpage;