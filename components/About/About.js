import classes from './About.module.css'
import ItemSkill from './ItemSkill'
const AboutPage = () => {
  return (
    <div className={classes.about}>
        <header className={classes.heading}>
            <span className={classes.hiii}>
                <h3>About Me</h3>
            </span>
        </header>
        <div className={classes.aboutflex}>
          <section className={classes.description}>
            <p style={{margin:'3rem auto'}}> 

I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.

My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
</p>
          </section>
        <section className={classes.works}>
                <span className={classes.hiii}>What I am doing</span>
            <div className={classes.worksitems}>
            <ItemSkill/>              
            <ItemSkill/>              
            <ItemSkill/>              
            <ItemSkill/>              

            </div>
              <span className={classes.hiii}>Testimonials</span>   

        </section>
        
          <section className={classes.testimonials}>
            <div className={classes.testiitems}>
          <ItemSkill/>              
            <ItemSkill/>              
            <ItemSkill/>              
            <ItemSkill/>        
            </div>
          </section>
   
          <section className={classes.testimonials}>
              <span className={classes.hiii}>Clients</span>   
            <div className={`${classes.testiitems} ${classes.clientsitems}`}>
          <ItemSkill/>              
            <ItemSkill/>              
            <ItemSkill/>              
            <ItemSkill/>        
            </div>
          </section>

        </div>
    </div>
  )
}

export default AboutPage