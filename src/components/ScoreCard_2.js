const Score2 = ()=>{
    return(
        <div className="container-fluid">
            <div>
                <h4>Australia A vs India A, 1ST - Live Cricket Score card, Commentary</h4>
                <p>
                    <span className="me-3"><b>Series:</b> India A tour of Australia, 2024 </span>
                    <span  className="me-3"><b>Venue:</b> Melbourne Cricket Ground, Melbourne </span>
                    <span><b>Date & Time:</b> Nov 07-Nov 11, 10:30 AM LOCAL</span>
                </p>
            </div>
            <div>
            
            

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link text-dark" id="home-tab" data-bs-toggle="tab" data-bs-target="#Commentary" type="button" role="tab" aria-controls="Commentary" aria-selected="true">Commentary</button>
  </li>
  <li class="nav-item" role="presentation">
    <button className="nav-link  text-dark" id="profile-tab" data-bs-toggle="tab" data-bs-target="#ScoreCard" type="button" role="tab" aria-controls="ScoreCard" aria-selected="false">ScoreCard</button>
  </li>
  <li class="nav-item" role="presentation">
    <button className="nav-link  text-dark" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Squads</button>
  </li>
  <li class="nav-item" role="presentation">
    <button className="nav-link  text-dark" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Highlights</button>
  </li>
  <li class="nav-item" role="presentation">
    <button className="nav-link  text-dark" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Full Commentary</button>
  </li>
  <li class="nav-item" role="presentation">
    <button className="nav-link text-dark" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Live Blog</button>
  </li>
  <li class="nav-item" role="presentation">
    <button className="nav-link text-dark" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Match Facts</button>
  </li>
  <li class="nav-item" role="presentation">
    <button className="nav-link text-dark" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">News</button>
  </li>
  <li class="nav-item" role="presentation">
    <button className="nav-link text-dark" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Photes</button>
  </li>
</ul>
</div>

<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="Commentary" role="tabpanel" aria-labelledby="home-tab">
    <div className="row">
    <h6>INDA not yet</h6>
                <h4>AUSA 0 (0)</h4>
                <p className="text-danger">
                       Day 3: Tea Break - Australia A need 135 runs</p>
    <div href="Commentary" className="border col-6 p-2" >
                
               <table className="" style={{width:'100%'}}>
                <tbody>
                    <tr>
                        <th>Batter</th><th>R</th><th>B</th><th>4s</th><th>6s</th><th>SR</th>
                    </tr>
                    <tr>
                        <td>Nathan McSweeney *</td><td>16</td><td>47</td><td>0</td><td>0</td> <td>34.78</td>
                    </tr>
                    <tr>
                        <td>Sam Konstas</td><td>0</td><td>0</td><td>0</td><td>0</td><td>32.7</td>
                    </tr>
                    <tr>
                        <th>Bowler</th><th>O</th><th>M</th><th>R</th><th>W</th><th>ECO</th>
                    </tr>
                    <tr>
                        <td>Nitish Reddy *</td>
                        <td>2</td>
                        <td>0</td>
                        <td>5</td>
                        <td>0</td>
                        <td>2.50</td>
                    </tr>

                </tbody>
               </table>
            </div>

        <div className="col-3">
            <div className="border">
                
                <p className="bg-dark text-light">Key Status</p>
                <div className="p-2">
                <p><b>Partnership:</b>80(112)</p>
                <p><b>Last Wtk:</b>Oliver Davies b Tanush Kotian 21(22) - 73/4 in 27.2 ov.</p>
                <p><b>Last 10 overs:</b> 58 runs, 0 wkts
                </p>
                <p><b>Toss:</b>Australia A (Bowling)
                </p>

                </div>
                

            </div>

        </div>
        <div className="col-3"></div>
    </div>
  


  </div>
  <div class="tab-pane fade" id="ScoreCard" role="tabpanel" aria-labelledby="profile-tab">
    <h1>ScoreCard</h1>

  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>


        </div>
    )
}
export default Score2;