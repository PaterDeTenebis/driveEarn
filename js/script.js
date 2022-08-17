function bumperList() {
  let content = ` 
  <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">2500 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">3300 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;

  $('#spoilers').removeClass('btnBlue');
  $('#wheels').removeClass('btnBlue');
  $('#hood').removeClass('btnBlue');
  $(this).addClass('btnBlue');
  $('#visualDescr_card').html(content);
}

function wheelsList() {
  let content = ` 
  <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">4500 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">3300 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;

  $('#spoilers').removeClass('btnBlue');
  $(this).addClass('btnBlue');
  $('#hood').removeClass('btnBlue');
  $('#bumper').removeClass('btnBlue');
  $('#visualDescr_card').html(content);
}

function hoodList() {
  let content = ` 
  <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">5500 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">3300 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;

  $('#spoilers').removeClass('btnBlue');
  $('#wheels').removeClass('btnBlue');
  $(this).addClass('btnBlue');
  $('#bumper').removeClass('btnBlue');
  $('#visualDescr_card').html(content);
}

function spoilersList() {
  let content = ` 
  <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">1500 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">3300 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;

  $('#spoilers').addClass('btnBlue');
  $('#wheels').removeClass('btnBlue');
  $('#hood').removeClass('btnBlue');
  $('#bumper').removeClass('btnBlue');
  $('#visualDescr_card').html(content);
}

$('#spoilers').on('click', spoilersList);
$('#bumper').on('click', bumperList);
$('#wheels').on('click', wheelsList);
$('#hood').on('click', hoodList);

function setRange() {
  var fuelMin = $('#rangeFuel').attr('min');
  var fuelMax = $('#rangeFuel').attr('max');
  $('#fuelMin').html(fuelMin);
  $('#fuelMax').html(fuelMax);

  var distanceMin = $('#rangeDistance').attr('min');
  var distanceMax = $('#rangeDistance').attr('max');
  $('#distanceMin').html(distanceMin + '&nbspkm');
  $('#distanceMax').html(distanceMax + '&nbspkm');
}

$(document).ready(setRange, spoilersList());
