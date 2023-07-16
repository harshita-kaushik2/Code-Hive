import { useState, useContext } from 'react';
import Image from 'next/image';
import pdf from '@images/home/pdf.svg';
import chap_yt from '@images/home/yt.svg';
import quiz from '@images/home/test_and_quiz.svg';
import assign from '@images/home/assignment.svg';
import Tilt from 'react-vanilla-tilt';
import styles from '@styles/Home.module.css';
import Header from 'components/common/Header/Header';
import Link from 'next/link';
import Footer from 'components/common/Footer';
import { Store } from 'utils/Store/Store';
import Preloader from 'components/common/Preloader';
import axios from 'node_modules/axios/index';
import TestimonialCard from 'components/Testimonial/Testimonial';

export default function Home() {
  const { dispatch } = useContext(Store);

  const emptyForm = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  };

  const headerImg = '/images/home/homeback.svg';

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/submitForm', form);
      const data = await res.data;
      console.log(data);
      dispatch({
        type: {
          task: 'setAlert',
          alert: { type: 'noti', message: 'Form Submitted Successfully' }
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    setForm(emptyForm);
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header image={headerImg} text='Code Hive' />
      <main>
        <section id={styles.content}>
          {/* <!-- Our Mission Container --> */}
          <div className={styles.mission}>
            <h2>The Vision</h2>
            <p>
              The Internet today is crowded with an ocean of resources. And
              while that might have been a good thing, it ends up becoming a
              complete nightmare for a beginner who does not know what to 
              and what not, as well as for a professional who has to 
              prepare for an upcoming interview but has no time to go through
              all the resources to find the refined ones.
            </p>
            <p>Code Hive acts as a one stop solution catering the needs of 
            both a newbie as well as a professional by providing guided paths, 
            interview prep resources and a lot more !</p>
          </div>

          {/* Our Services Section  */}
          <div id={styles.ourserv}>
            <h2>Our Services</h2>
            <div id={styles.ourserimgs}>
              <div>
                <Image src={pdf} alt='pdfs' />
                <p>DSA RESOURCES</p>
              </div>
              <div>
                <Image src={chap_yt} alt='explaination' />
                <p>CHAPTER EXPLANATION BY YOUTUBE VIDEO</p>
              </div>
              <div>
                <Image src={quiz} alt='solutions' />
                <p>SOLUTION OF TEST AND QUIZZES</p>
              </div>
              <div>
                <Image src={assign} alt='assignments' />
                <p>ASSIGNMENTS GIVEN</p>
              </div>
            </div>
          </div>

          {/* <!-- grab your notes section  --> */}
          <div className={styles.courses} id='courses'>
            <h2 className={styles.grabh2}>Grab Your Notes Here</h2>
            <div className={styles.grabnotes}>
              <Link passHref href='/courses/btech'>
                <Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
                  <div className={styles.grab1}>
                    <p>B.Tech</p>
                  </div>
                </Tilt>
              </Link>
              <Link passHref href='/'>
                <Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
                  <div className={styles.grab2}>
                    <p>DSA</p>
                  </div>
                </Tilt>
              </Link>
              <Link passHref href='/'>
                <Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
                  <div className={styles.grab3}>
                    <p>Development</p>
                  </div>
                </Tilt>
              </Link>
              <Link passHref href='/'>
                <Tilt options={{ max: 60, glare: true }} className={styles.tlt}>
                  <div className={styles.grab4}>
                    <p>Interview Prep</p>
                  </div>
                </Tilt>
              </Link>
            </div>
          </div>

          {/* <!-- Recent Updates section  --> */}
          {/* <!-- same css as grabnotes section  --> */}
          <h2 className={styles.grabh2}>Future Updates</h2>
          <div className={styles.grabnotes}>
            <Link passHref href='/'>
              <Tilt className={styles.tlt}>
                <div className={styles.rec1}>
                  <p>App</p>
                </div>
              </Tilt>
            </Link>
            <Link passHref href='/'>
              <Tilt className={styles.tlt}>
                <div className={styles.rec2}>
                  <p>Blogs</p>
                </div>
              </Tilt>
            </Link>
            <Link passHref href='/'>
              <Tilt className={styles.tlt}>
                <div className={styles.rec3}>
                  <p>Competitive Exams</p>
                </div>
              </Tilt>
            </Link>
          </div>

          {/* <!-- Contact Form  --> */}
          <div id='contacts'>
            <h2 className={styles.grabh2}>Get In Touch</h2>
            <form onSubmit={onSubmit}>
              <div className={styles.cntfrm}>
                <input
                  value={form.first_name}
                  onChange={onChange}
                  required
                  type='text'
                  name='first_name'
                  placeholder='First Name'
                  className={styles.details}
                  pattern='[a-zA-Z]+'
                  title='Please enter Alphabets'
                />
                <input
                  value={form.last_name}
                  onChange={onChange}
                  required
                  name='last_name'
                  type='text'
                  placeholder='Last Name'
                  className={styles.details}
                  pattern='[a-zA-Z]+'
                  title='Please enter Alphabets'
                />
                <input
                  value={form.email}
                  onChange={onChange}
                  required
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                  name='email'
                  type='email'
                  placeholder='Email'
                  className={styles.details}
                />
                <input
                  value={form.phone}
                  onChange={onChange}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Filter out non-numeric characters
                  }}
                  name='phone'
                  placeholder='Phone'
                  className={styles.details}
                />
                <input
                  value={form.address}
                  onChange={onChange}
                  required
                  name='address'
                  type='text'
                  placeholder='Address'
                  className={styles.address}
                />
                <input
                  value={form.message}
                  onChange={onChange}
                  required
                  name='message'
                  type='text'
                  placeholder='Type your message here'
                  className={styles.msg}
                />
              </div>
              <button type='submit' id={styles.sub}>
                {loading ? <Preloader /> : <p>Submit</p>}
              </button>
            </form>
          </div>
        </section>
      </main>
      <TestimonialCard />
      <Footer />
    </>
  );
}