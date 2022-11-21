import styles from '../styles/Career.module.css';
import { FiArrowUpRight } from 'react-icons/fi';
import { ImArrowUpRight2 } from 'react-icons/im'

const Career = () => {
  return (
    <div className={ styles.career }>
      <h3>We Are Hiring</h3>
      <h1 className={ styles.mainHeading }>Be a part of the drive for Excellence</h1>
      <p>Lorem ipsum, dolor sit amet.</p>

      <div className={ styles.buttons }>
        <button className={ styles.btn }>Engineering</button>
        <button className={ styles.btn }>Design</button>
        <button className={ styles.btn }>Product Management</button>
        <button className={ styles.btn }>Last Mile Deliveries</button>
      </div>

      <button className={ styles.black }>Design</button>

      <div className={ styles.box }>
        <h3 className={ styles.subHeading }>Front-End Engineer</h3>
        <p className={ styles.para }>Lorem ipsum amet consectetur adipisicing!</p>

        <button className={ styles.btn }>On-site</button>
        <button className={ styles.btn }>Hybrid</button>
        <button className={ styles.btn }>Full Time</button>

        <br />
        <a href="" className={ styles.anchor }>
          Apply  &nbsp; &nbsp;
          <ImArrowUpRight2 style={{
            display: 'inline-block',
            fontWeight: 700,
            marginBottom: '-.2rem'
            }} 
          />
        </a>
      </div>
      <br />

      <div className={ styles.box }>
        <h3 className={ styles.subHeading }>Back-End Engineer</h3>
        <p className={ styles.para }>Lorem ipsum amet consectetur adipisicing!</p>

        <button className={ styles.btn }>On-site</button>
        <button className={ styles.btn }>Hybrid</button>
        <button className={ styles.btn }>Full Time</button>

        <br />
        <a href="" className={ styles.anchor }>
          Apply &nbsp; &nbsp;
          <ImArrowUpRight2 style={{
            display: 'inline-block',
            fontWeight: 700,
            marginBottom: '-.2rem'
            }} 
          />
        </a>
      </div>
      <br />

      <div className={ styles.box }>
        <h3 className={ styles.subHeading }>Quality Assurance Engineer</h3>
        <p className={ styles.para }>Lorem ipsum amet consectetur adipisicing!</p>

        <button className={ styles.btn }>On-site</button>
        <button className={ styles.btn }>Hybrid</button>
        <button className={ styles.btn }>Full Time</button>

        <br />
        <a href="" className={ styles.anchor }>
          Apply &nbsp; &nbsp;
          <ImArrowUpRight2 style={{
            display: 'inline-block',
            fontWeight: 700,
            marginBottom: '-.2rem'
            }} 
          />
        </a>
      </div>
      <br />

    </div>
  );
}
 
export default Career;