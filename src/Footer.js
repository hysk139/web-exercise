import './Footer.css';

function Footer() {
    return (
        <div className="App">
            <footer class="footer">
                <div class="links-section">
                    <div class="section exercise-desc">
                        <h2 class="text title" style="font-weight: bold;">Exercise</h2>
                        <p class="text">Exercise was created for the new ways we live and work. We make a better workspace around the world.</p>
                    </div>
                    <div class="section product-links">
                        <h3 class="text title" style="font-weight: bold;">Product</h3>
                        <a class="text" href="#">Overview</a><br/>
                        <a class="text" href="#">Pricing</a><br/>
                        <a class="text" href="#">Customer stories</a><br/>
                    </div>
                    <div class="section resource-links">
                        <h3 class="text title" style="font-weight: bold;">Resource</h3>
                        <a class="text" href="#">Blog</a><br/>
                        <a class="text" href="#">Guides & tutorials</a><br/>
                        <a class="text" href="#">Help center</a><br/>
                    </div>
                    <div class="section company-links">
                        <h3 class="text title" style="font-weight: bold;">Company</h3>
                        <a class="text" href="#">About us</a><br/>
                        <a class="text" href="#">Careers</a><br/>
                        <a class="text" href="#">Media kit</a><br/>
                    </div>
                    <div class="section start-today">
                        <h2 class="text title" style="font-weight: bold;">Try it Today</h2>
                        <p class="text" >Get started for free. Add your whole team as your needs grow.</p>
                        <button>Start today</button>
                    </div>
                </div>
                <div class="miscellaneous">
                    <div class="misc-section other-links">
                        <a class="text" href="#">Terms & privacy</a>
                        <a class="text" href="#">Security</a>
                        <a class="text" href="#">Status</a>
                        <p class="text" style="display: inline">©2021 Whitespace LLC.</p>
                    </div>
                    <div class="misc-section social-media">
                        <a class="text" href="#">F</a>
                        <a class="text" href="#">T</a>
                        <a class="text" href="#">L</a>
                    </div>
                </div>
            </footer>
        </div>
    );
  }
  
  export default App;