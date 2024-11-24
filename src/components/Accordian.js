import React, { useState } from 'react';

function Navar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div>
      <div class="container mt-5">
  <h4 class="text-center mb-4">Live Cricket Scorecard</h4>
  <div class="row">
    
    <div class="col-12 col-md-6 mb-4">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">Australia</h5>
        </div>
        <div class="card-body">
          <p><b>Score:</b> 250/5</p>
          <p><b>Overs:</b> 45.2</p>
          <p><b>Last Wicket:</b> Smith (45) c Khan b Ahmed</p>
          <p><b>Batters:</b> Warner (45), Labuschagne (67)</p>
        </div>
      </div>
    </div>

    
    <div class="col-12 col-md-6 mb-4">
      <div class="card">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">Pakistan</h5>
        </div>
        <div class="card-body">
          <p><b>Score:</b> 180/3</p>
          <p><b>Overs:</b> 40.0</p>
          <p><b>Last Wicket:</b> Ali (12) b Starc</p>
          <p><b>Batters:</b> Babar Azam (89), Rizwan (23)</p>
        </div>
      </div>
    </div>
  </div>

  
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header bg-warning text-dark">
          <h5 class="mb-0">Match Summary</h5>
        </div>
        <div class="card-body">
          <p><b>Venue:</b> MCG, Melbourne</p>
          <p><b>Date:</b> Nov 12, 2024</p>
          <p><b>Status:</b> Australia batting, 5 wickets down</p>
          <p><b>Next Innings:</b> Pakistan to follow</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Navar;
