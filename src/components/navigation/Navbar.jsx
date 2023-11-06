import './navbar.css'

export function Navbar () {
    return (
    <nav>
        <div class="navbar">
        <h2> KidzWorlz</h2>
  <a href="#home">Live</a>
  <a href="#smLink">Social</a>
  <div class="dropdown">
    <button class="dropbtn">Shop 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a target='_blank' href="https://www.amazon.com/stores/page/BA2B692D-8665-434C-9F1C-CBB20CAED180?channel=OfficialWeb">Pinkfong</a>
      <a target='_blank' href="https://www.shopdisney.com/characters/disney/mickey-mouse/">Mickey Mouse</a>
      <a target='_blank' href="https://www.shopdisney.com/movies-shows/disney/disney-junior/spidey-and-his-amazing-friends/">Spidey</a>
    </div>
  </div> 
</div>
    </nav>
    );
}