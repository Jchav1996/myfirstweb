import './navbar.css'

export function Navbar () {
    return (
    <nav>
        <div class="navbar">
        <h2> KidzWorlz</h2>
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <div class="dropdown">
    <button class="dropbtn">More 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
</div>
    </nav>
    );
}