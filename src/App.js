import map from './images/map.png'
import './App.css';

const App = () => {

  return (
    
<>
    <div className='main'>
      <div className='header'>
        <nav className='nav'>
          <img className='home' src='https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg' alt='logo' />
        <a>Services</a>
        <a>Amentities</a>
        <img className='logo' src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530029256964-CV7MA5GKTQE3U3NZMNAA/upstate-laundromat-logo.png?format=1500w' alt='logo'></img>
        <a>Testimonials</a>
        <a>FAQ</a>
        <a>Contact</a>
       </nav>
      </div>
      <div className='content'>
        <h3> Modern & upscale laundromat</h3>
        <h1>A Better Place to do Your Laundry</h1>
          <button className='button'><img className='button-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJj5o0BvzFYgEcU3hx_4JT6gNkEXypsYgfB4OnKXJk1pfIzxqXrVdjOox4f9kprvKljeY&usqp=CAU'></img>View Location</button>
      </div>
    </div>

<div className='services'>
    <div className='machine'>
      <img className='services-logo' src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530026219032-LAMMPX1YGSTG80MALQ1B/self-serve-icon.png' alt='logo'></img>

    <h3> COIN & COINLESS MACHINES</h3>
    <p className='services-content'>Our environmentally friendly Huebsch® machines use less water and dry faster so you are done fast! You can pay with coins, the Upstate Laundromat loyalty card, Visa, or MasterCard</p>
    </div>
    <div className='fold'>
      <img className='services-logo' src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530026649714-MWDVNGVYJXI2OGUMCEJE/folded-shirt-icon.png' alt='logo'></img>

    <h3>FLUFF & FOLD SERVICE AVAILABLE</h3>
    <p className='services-content'>Don't waste valuable time doing your own laundry. Let us handle it for you! Offered 7 days a week, same day or next day available. We will notify you when your laundry is done via text.</p>

    </div>
    
    <div className='discount'>
      <img className='services-logo' src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530027301452-A3F8IYFIAUJGGEKVRD2N/loyalty-card-icon.png' alt='logo'></img>

      <h3>LOYALTY DISCOUNTS</h3>
      <p className='services-content'>Use your Upstate Laundromat personal loyalty card to earn special discounts over time. Make sure to register your card by clicking here or by downloading the Fascard Mobile app</p>
    </div>

  </div>
    <div className='info'>

    <h2 className='info-h2'>We are on a mission to change the laundromat experience</h2>
    <strong className='info-strong'>Here's what we offer:</strong>

    <div className='info-content1'>
    <div className='test'>
      <img className='wifi-logo' src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530020869546-1T2M1L0IX76K7KFXY39L/wifi-icon.png' alt='logo'></img>
      <h3>FREE WIFI</h3>
    </div>

    <div className='test'>
      <img className='air-logo' src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530021032188-FBDA4LWE97SZZCB1YY2X/snowflake-icon.png' alt='logo'></img>
      <h3>AIR CONDITIONING</h3>
    </div>
    <div className='test'>
      <img className='seat-logo' src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530021681419-GYXD6DF5M7L4D3HPYGTP/chair-icon.png' alt='logo'></img>
      <h3>COMFORTABLE SEATING</h3>
    </div>
    <div className='test'>
      <img className='table-logo' src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530021675861-0J7HR7BL7OFWGV9M7FRN/cafe-table-icon.png' alt='logo'></img>
      <h3>CAFE TABLE</h3>
    </div>
    <div className='test'>
      <img className='charger-logo' src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530021968202-B4SATI3FPAUJ68DUI3K8/charger-icon.png' alt='logo'></img>
      <h3>CHARGING STATIONS</h3>
    </div>
      </div>

      <div className='info-content2'>

      <div className='test'>
      <img className='wifi-logo' src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530021686276-QN5SUM11LXHN5PFT5XMH/hdtv-icon.png' alt='logo'></img>
      <h3>5 HD 55" TVS</h3>
    </div>

    <div className='test'>
      <img className='wifi-logo' src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530021262662-489ZWDZ8UTJ05NM41197/washing-machine-icon.png' alt='logo'></img>
      <h3>35 HI TECH MACHINES</h3>
    </div>

    <div className='test'>
      <img className='wifi-logo' src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530023554246-62VWGBHBNR9DUB98J220/ipad-icon.png' alt='logo'></img>
      <h3>KID'S ZONE</h3>
    </div>
    <div className='test'>
      <img className='wifi-logo' src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530023590681-34KOTJXXCB4BKL9JQFN9/attendant-icon.png' alt='logo'></img>
      <h3>ON-SITE ATTENDANT</h3>
    </div>
    <div className='test'>
      <img className='wifi-logo' src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530023590681-34KOTJXXCB4BKL9JQFN9/attendant-icon.png' alt='logo'></img>
      <h3>ON-SITE ATTENDANT</h3>
    </div>
    <div className='test'>
      <img className='wifi-logo' src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530023711801-17ACA49DCGXKXCQYTCCJ/security-camera-icon.png' alt='logo'></img>
      <h3>SECURITY CAMERAS</h3>
    </div>
      </div>
    </div>

    <div className='reviews'>
        <h2 className='reviews-h2'>What People Are Saying</h2>
        <div className='comments'>
          <div className='user'>
           <h3>TIFF BABYGIRL 7777 EDENS</h3>
            <img className='stars' src='https://t4.ftcdn.net/jpg/02/75/19/41/360_F_275194138_83AtXVg6LnxvT8LzdETgAn95NhQRKR4J.jpg'></img>
            <img className='google' src='https://reviewsonmywebsite.com/images/source-logos/google_sm.png'></img>
          </div>
          <p> Oct 13, 2022</p>
          <p>Loved it</p>

          <div className='user'>
           <h3>ROBERT PHILLIPS</h3>
            <img className='stars' src='https://t4.ftcdn.net/jpg/02/75/19/41/360_F_275194138_83AtXVg6LnxvT8LzdETgAn95NhQRKR4J.jpg'></img>
            <img className='google' src='https://reviewsonmywebsite.com/images/source-logos/google_sm.png'></img>
          </div>
          <p> Oct 13, 2022</p>
          <p></p>

          <div className='user'>
           <h3>HOPE HAMMOND</h3>
            <img className='stars' src='https://t4.ftcdn.net/jpg/02/75/19/41/360_F_275194138_83AtXVg6LnxvT8LzdETgAn95NhQRKR4J.jpg'></img>
            <img className='google' src='https://reviewsonmywebsite.com/images/source-logos/google_sm.png'></img>
          </div>
          <p> Oct 13, 2022</p>
          <p>I live in Myrtle beach but was in town for the week and used this laundromat. I had a payment issue so I email them to resolve it and they did no problem! I will definitely come back to this laundromat in the future while in town! If anyone has issues just go to the website and send them an email if the attendant can’t help you!</p>

          <div className='user'>
           <h3>JOE RIVERA</h3>
            <img className='stars' src='https://t4.ftcdn.net/jpg/02/75/19/41/360_F_275194138_83AtXVg6LnxvT8LzdETgAn95NhQRKR4J.jpg'></img>
            <img className='google' src='https://reviewsonmywebsite.com/images/source-logos/google_sm.png'></img>
          </div>
          <p> Oct 13, 2022</p>
          <p>The laundromat is very clean employees are very courteous and helpful willing to interact with the patrons. Restaurant nearby and other shopping places so you can do everything at one time more or less</p>
          <br></br>
          <p>Powered by ReviewsOnMyWebsite</p>
        </div>
      </div>
      <div className='questions'>
        <div>
        <h2 className='questions-h2'>Frequently Asked Questions</h2>
        </div>
        <div className='answers'>

        <div className='one'>
          <h2>
            <strong className='plus'>+</strong>
            What are your hours?
          </h2>
          <h2>
            <strong className='plus'>+</strong>
            What is the last wash time?
          </h2>
          <h2>
            <strong className='plus'>+</strong>
            Is coin-less laundry really coin-less?
          </h2>
          <h2>
            <strong className='plus'>+</strong>
            How do i get a new laudry card?
          </h2>
          <h2>
            <strong className='plus'>+</strong>
            How do i add money to the card?
          </h2>
          <h2>
            <strong className='plus'>+</strong>
            Is my laundry card reusable/reloadable?
          </h2>
        </div>

        <div className='two'>
          <h2>
            <strong className='plus'>+</strong>
            How do i register my laundry card?
          </h2>
          <h2>
            <strong className='plus'>+</strong>
            Why is the front load washer often a better choice?
          </h2>
          <h2>
            <strong className='plus'>+</strong>
            Can i wash my pillows in a front load washer?
          </h2>
          <h2>
            <strong className='plus'>+</strong>
            Can i was a down comforter?
          </h2>
          <h2>
            <strong className='plus'>+</strong>
            How do i add time to the dryers?
          </h2>
          <h2>
            <strong className='plus'>+</strong>
           What items should NOT be put in the dryer?
          </h2>
        </div>
        </div>
      </div>
      <div className='contact'>
  
      <>
      <div className='contact-info'>
      <h2 className='contact-h2'>Contact</h2>
      <img className='facebook' src='https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png'></img>
      <h3>LOCATION</h3>
      <p>2600 Anderson Rd GReenville, SC 29611</p>
      <h3>HOURS</h3>
      <p>Open every day from 8am-10pm (Last wash at 8pm)</p>
      <h3>EMAIL</h3>
      <p>info@upstatelaudromat.com</p>
      </div>

      <div className='map'>
      <img className='map-img' src={map}></img>
      </div>
      </>
      
      </div>
      <div className='footer'>
      <footer>
        <p>info@upstatelaundromat.com  |  2600 Anderson Rd, Greenville SC 29611
© 2018 Upstate Laundromat. All rights reserved. Site by Knapsack.</p>
        <img src='https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530035070327-2J6R7UXCQCWGT71YID60/u-logo.png'></img>
      </footer>
      </div>
</>
  );
}

export default App
