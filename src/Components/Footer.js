import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

import './Footer.css';

function Footer() {
  return (
  <div className='footer-container'>
      <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join the Book Zone newsletter to receive updates of
            upcoming book releases.
          </p>
          <p className='footer-subsription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
              <form>
                  <input type='email' name='email' placeholder='Your Email'
                  className='footer-input'/>
                  <Button buttonStyle='btn--outline'>Subscribe</Button>
              </form>
          </div>
      </section>
      <div className='footer-links'>
          <div className='footer-link-wrapper'>
              <div className='footer-link-items'>
                  <h2>About Us</h2>
                  <Link to = '/sign-up'>How it works</Link>
                  <Link to = '/'>Testimonials</Link>
                  <Link to = '/'>Terms of service</Link>
              </div>
          </div>

          <div className='footer-link-wrapper'>
              <div className='footer-link-items'>
                  <h2>Contact Us</h2>
                  <Link to = '/'>Contact</Link>
                  <Link to = '/'>Support</Link>
                  
              </div>
          </div>

          <div className='footer-link-wrapper'>
              <div className='footer-link-items'>
                  <h2>Soical media</h2>
                  <Link to = '/'>Instagram</Link>
                  <Link to = '/'>Twitter</Link>
                  <Link to = '/'>Facebook</Link>
                  <Link to = '/'>YouTube</Link>
              </div>
          </div>

      </div>
      <section className='social-media'>
          <div className='social-media-wrap'>
              <div className='footer-logo'>
                  <Link to = '/' className='social-logo'>
                      The Book Zone <i className='fab fa-typo3' />
                  </Link>
              </div>
              <small className = 'webiste-rights'>The Book Zone @ 2021</small>
              <div className='social-icons'>
                  <Link className='social-icon-link facebook'
                    to = '/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f' />
                  </Link>
              </div>

              <div className='social-icons'>
                  <Link className='social-icon-link instagram'
                    to = '/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                        <i className='fab fa-instagram' />
                  </Link>
              </div>

              <div className='social-icons'>
                  <Link className='social-icon-link youtube'
                    to = '/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                        <i className='fab fa-youtube' />
                  </Link>
              </div>

              <div className='social-icons'>
                  <Link className='social-icon-link twitter'
                    to = '/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                        <i className='fab fa-twitter' />
                  </Link>
              </div>
          </div>
      </section>
  </div>
  )
}

export default Footer;
