import { FaPlus } from 'react-icons/fa6';
import { RiTeamFill } from 'react-icons/ri';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Home = () => {
    const checkNavigationButtons = (event) => {
        const navPrev = document.querySelector('.owl-prev');
        const navNext = document.querySelector('.owl-next');
        if (navPrev && navNext) {
          if (event.item.index === 0) {
            navPrev.style.display = 'none';
          } else {
            navPrev.style.display = 'block';
          }
          if (event.item.index + event.page.size >= event.item.count) {
            navNext.style.display = 'none';
          } else {
            navNext.style.display = 'block';
          }
        }
      };
      const options = {
        items: 3,
        loop: false,
        nav: true,
        dots: false,
        margin: 10,
        navText: [
          '<i class="fa-solid fa-chevron-left"></i>',
          '<i class="fa-solid fa-chevron-right"></i>',
        ],
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 },
        },
        onInitialized: checkNavigationButtons,
        onChanged: checkNavigationButtons,
      };

    
    return (

    <div>
         <OwlCarousel className='owl-carousel owl-theme '  carousel {...options} 
        >

            <div className='item border bg-white rounded-2'>
                <Link to='/Score' className=' text-decoration-none text-dark'>
                
                <div className='p-2'>
                <p>2nd ODI. Pakistan tour of Australia, 2024{' '}
                    <a href="#" className="badge badge-info bg-dark text-decoration-none">T20I
                    </a>
                </p>
                <table className=''>
                    <tbody>
                        <tr className='my-2'>
                            <td>
                            <img src="https://static.cricbuzz.com/a/img/v1/25x18/i1/c172115/india.jpg" width={'5px'}
                                            alt="India flag"/>
                            </td> 
                            <td>IND</td>
                            <td className='ps-5'>219-6(20)</td>
                        </tr>
                        <tr>
                            <td>
                            <img src="https://static.cricbuzz.com/a/img/v1/25x18/i1/c172126/south-africa.jpg" width={'5px'}
                                            alt="south-africa flag"/>

                            </td> 
                            <td>RSA</td>
                            <td  className='ps-5'>208-7 (20)</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-primary mt-3">India won by 11 runs</p>
                </div>
                </Link>
                <span className='text-end bg-secondary d-block text-light p-2'>FANTACY HANDBOOK &nbsp; &nbsp; SCHEDULE</span>
            </div>

            <div className='item border  bg-white rounded-2'>
                <div className='p-2'>
                <p>2nd ODI. Pakistan tour of Australia, 2024{' '}
                    <a href="#" className="badge badge-info bg-info text-decoration-none">ODI
                    </a>
                </p>
                <table>
                    <tbody>
                        <tr className='my-2'>
                            <td>
                            <img src="https://static.cricbuzz.com/a/img/v1/25x18/i1/c172117/australia.jpg" width={'5px'}
                                            alt="Australia flag"/>

                            </td> 
                            <td>AFG</td>
                            <td  className='ps-5'>234 (49.5)</td>
                        </tr>
                        <tr>
                            <td>
                            <img src="https://static.cricbuzz.com/a/img/v1/25x18/i1/c172116/pakistan.jpg" width={'5px'}
                                            alt="Australia flag"/>

                            </td> 
                            <td>PAK</td>
                            <td  className='ps-5'>234 (49.5)</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-danger mt-3">Pakistan need 154 runs</p>
                </div>
                <span className='text-end  bg-secondary d-block text-light p-2'>FANTACY HANDBOOK SCHEDULE</span>
            </div>

            <div className='item border  bg-white rounded-2'>
                <div className='p-2'>
                <p>2nd ODI. Pakistan tour of Australia, 2024{' '}
                    <a href="#" className="badge badge-info bg-info text-decoration-none">ODI
                    </a>
                </p>
                <table>
                    <tbody>
                        <tr className='my-2'>
                            <td>
                            <img src="https://static.cricbuzz.com/a/img/v1/25x18/i1/c172117/australia.jpg" width={'5px'}
                                            alt="Australia flag"/>

                            </td> 
                            <td>AFG</td>
                            <td  className='ps-5'> 234 (49.5)</td>
                        </tr>
                        <tr>
                            <td>
                            <img src="https://static.cricbuzz.com/a/img/v1/25x18/i1/c172116/pakistan.jpg" width={'5px'}
                                            alt="Australia flag"/>

                            </td> 
                            <td>PAK</td>
                            <td  className='ps-5'>234 (49.5)</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-danger mt-3">Pakistan need 154 runs</p>
                </div>
                <span className='text-end  bg-secondary d-block text-light p-2'>FANTACY HANDBOOK SCHEDULE</span>
            </div>

            <div className='item border  bg-white rounded-2'>
                <div className='p-2'>
                <p>2nd ODI. Pakistan tour of Australia, 2024{' '}
                    <a href="#" className="badge badge-info bg-info text-decoration-none">ODI
                    </a>
                </p>
                <table>
                    <tbody>
                        <tr className='my-2'>
                            <td>
                            <img src="https://static.cricbuzz.com/a/img/v1/25x18/i1/c172117/australia.jpg" width={'5px'}
                                            alt="Australia flag"/>

                            </td> 
                            <td>AFG</td>
                            <td  className='ps-5'>234 (49.5)</td>
                        </tr>
                        <tr>
                            <td>
                            <img src="https://static.cricbuzz.com/a/img/v1/25x18/i1/c172116/pakistan.jpg" width={'5px'}
                                            alt="Australia flag"/>

                            </td> 
                            <td>PAK</td>
                            <td  className='ps-5'>234 (49.5)</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-danger mt-3">Pakistan need 154 runs</p>
                </div>
                <span className='text-end bg-secondary d-block text-light p-2'>FANTACY HANDBOOK SCHEDULE</span>
            </div>
            <div className='item border  bg-white rounded-2'>
                <div className='p-2'>
                <p>2nd ODI. Pakistan tour of Australia, 2024{' '}
                    <a href="#" className="badge badge-info bg-info text-decoration-none">ODI
                    </a>
                </p>
                <table>
                    <tbody>
                        <tr className='my-2'>
                            <td>
                            <img src="https://static.cricbuzz.com/a/img/v1/25x18/i1/c172117/australia.jpg" width={'5px'}
                                            alt="Australia flag"/>

                            </td> 
                            <td>AFG</td>
                            <td  className='ps-5'>234 (49.5)</td>
                        </tr>
                        <tr>
                            <td>
                            <img src="https://static.cricbuzz.com/a/img/v1/25x18/i1/c172116/pakistan.jpg" width={'5px'}
                                            alt="Australia flag"/>

                            </td> 
                            <td>PAK</td>
                            <td  className='ps-5'>234 (49.5)</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-danger mt-3">Pakistan need 154 runs</p>
                </div>
                <span className='text-end bg-secondary d-block text-light p-2'>FANTACY HANDBOOK SCHEDULE</span>
            </div>
            <div className='item border  bg-white rounded-2'>
                <div className='p-2'>
                <p>2nd ODI. Pakistan tour of Australia, 2024{' '}
                    <a href="#" className="badge badge-info bg-info text-decoration-none">ODI
                    </a>
                </p>
                <table>
                    <tbody>
                        <tr className='my-2'>
                            <td>
                            <img src="https://static.cricbuzz.com/a/img/v1/25x18/i1/c172117/australia.jpg" width={'5px'}
                                            alt="Australia flag"/>

                            </td> 
                            <td>AFG</td>
                            <td  className='ps-5'>234 (49.5)</td>
                        </tr>
                        <tr>
                            <td>
                            <img src="https://static.cricbuzz.com/a/img/v1/25x18/i1/c172116/pakistan.jpg" width={'5px'}
                                            alt="Australia flag"/>

                            </td> 
                            <td>PAK</td>
                            <td  className='ps-5'>234 (49.5)</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-danger mt-3">Pakistan need 154 runs</p>
                </div>
                <span className='text-end bg-secondary d-block text-light p-2'>FANTACY HANDBOOK SCHEDULE</span>
            </div>
</OwlCarousel>


    <div className='p-3  QuickAccess '>
        <span className='fw-bold'>Quick Access</span>
        <a href='#'><i class="fa-solid fa-bookmark"></i>&nbsp;Fantacy Handbook</a>
        <a href='#'><i class="fa-solid fa-medal"></i>&nbsp;See Plans</a>
        <a href='#'><RiTeamFill />&nbsp;Team India</a>
        <a href='#'><FaPlus/>&nbsp; Cricbuzz Plus</a>
        <a href='#'>&nbsp;CB Plus & Times Prime</a>
    </div>


  <div className='border p-2'>
    <div className='row'>
        <div className='col-lg-2 col-md-6 col-10 mx-auto bg-white ms-1 latestnews'>
            
            <h5 className='text-success'>LATEST NEWS</h5>
            <p><a href='#'>WCA urges BPL to clear outstanding payments</a> <br/>1h ago</p>
            <p><a href='#'>Gurbaz-Omarzai stand turned the game - Simmons</a> <br/>2h ago </p>
            <p><a href='#'>Calf injury rules Lockie Ferguson out of Sri Lanka ODIs</a> <br/>3h ago</p>11h ago
            <p><a href='#'>Injured Najmul Hossain ruled out of West Indies Tests</a> <br/>4h ago</p>
            <hr/>
            <p><a href='#'>WCA urges BPL to clear outstanding payments</a> <br/>1h ago</p>
            <p><a href='#'>Gurbaz-Omarzai stand turned the game - Simmons</a> <br/>2h ago </p>
            <p><a href='#'>Calf injury rules Lockie Ferguson out of Sri Lanka ODIs</a> <br/>3h ago</p>11h ago
            <p><a href='#'>Injured Najmul Hossain ruled out of West Indies Tests</a> <br/>4h ago</p>
            <hr/>
            <p><a href='#'>WCA urges BPL to clear outstanding payments</a> <br/>1h ago</p>
            <p><a href='#'>Gurbaz-Omarzai stand turned the game - Simmons</a> <br/>2h ago </p>
            <p><a href='#'>Calf injury rules Lockie Ferguson out of Sri Lanka ODIs</a> <br/>3h ago</p>11h ago
            <p><a href='#'>Injured Najmul Hossain ruled out of West Indies Tests</a> <br/>4h ago</p>

        </div>
        <div className='col-lg-6 col-md-6 col-10  bg-white iplacuction'>
            <div>
            <span className='text-muted my-2'>IPL AUCTION</span>
            <img className='rounded-3 w-100' src="https://static.cricbuzz.com/a/img/v1/420x235/i1/c574717/ipl-auction-to-have-two-sets-o.jpg"/>
            <h4><a href='#'>IPL auction to have two sets of marquee players</a></h4>
            <p>The BCCI has informed the franchises that these two sets will include 8-9 players each</p>

            </div>
            
            <hr/>
            <div>
            <span className='text-muted my-2'>RETIREMENT</span>
            
            <img className='rounded-3 w-100' src="https://static.cricbuzz.com/a/img/v1/420x235/i1/c574754/tim-southee-set-to-retire-from.jpg"/>
            <h4><a href='#'>Tim Southee set to retire from Test cricket after England series</a></h4>
            <p>The fast-bowler will make a comeback if New Zealand do qualify for the WTC Final next year</p>
            <p><a href='#'>Kane Williamson to return for England Tests; Nathan Smith called-up</a></p>

            </div>

            
        </div>
        <div className='col-lg-3 col-md-6 col-10 ms-auto bg-white'>
            <h5 className='text-success'>FEATURED VIDEOS</h5>
        </div>
    </div>

  </div>
        </div>
    );
};

export default Home;
