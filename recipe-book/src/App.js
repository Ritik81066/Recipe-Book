import React from "react";
import "./App.css";
function App() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <a className="navbar-brand" href="#">Culinary Chronicles</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link">Recipes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Contact Us</a>
                </li>
            </ul>
        </div>
    </nav>


    <header>
        <h1>Culinary Chronicles</h1>
        <p>Flavours to Inspire, Recipes to Create</p>
        <button className="cta" onClick="openModal('loginModal')">Explore Recipes</button>
    </header>

    <section className="categories">
        <div className="category">
            <i>🥗</i>
            <h2>Appetizer</h2>
            <p> Light and flavorful dish to begin</p>
        </div>
        <div className="category">
            <i>🍽️</i>
            <h2>Main Course</h2>
            <p>Hearty dish featuring protein and sides.</p>
        </div>
        <div className="category">
            <i>🍰</i>
            <h2>Desserts</h2>
            <p>Sweet treats to satisfy your cravings.</p>
        </div>
    </section>

    <section className="featured-recipes">
        <h2>Featured Recipes</h2>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="recipe" data-aos="zoom-in">
                        <img src="images/buttr chicken.jpg" alt="Butter Chicken" className="ALTRA"/>
                        <h3>Butter Chicken</h3>
                        <p>Rich and creamy Indian chicken curry with flavorful spices.</p>
                        <a className="recbtn" onClick="openModal('recipeModal1')">View Recipe</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="recipe" data-aos="zoom-in">
                        <img src="images/tacos.jpg" alt="Tacos" className="ALTRA"/>
                        <h3>Tacos</h3>
                        <p>Traditional Mexican dish with a variety of fillings.</p>
                        <a className="recbtn" onClick="openModal('recipeModal2')">View Recipe</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="recipe" data-aos="zoom-in">
                        <img src="images/pizza.jpg" alt="Pizza" className="ALTRA"/>
                        <h3>Margherita Pizza</h3>
                        <p>classNameic Italian pizza topped with fresh tomatoes and basil.</p>
                        <a className="recbtn" onClick="openModal('recipeModal3')">View Recipe</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="recipe" data-aos="zoom-in">
                        <img src="images/sushi.jpg" alt="Sushi" className="ALTRA"/>
                        <h3>Sushi</h3>
                        <p>Japanese dish consisting of vinegared rice and seafood.</p>
                        <a className="recbtn" onClick="openModal('recipeModal4')">View Recipe</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="recipe" data-aos="zoom-in">
                        <img src="images/crossaw.jpg" alt="Croissant" className="ALTRA"/>
                        <h3>Croissant</h3>
                        <p>Flaky French pastry, perfect for breakfast.</p>
                        <a className="recbtn" onClick="openModal('recipeModal5')">View Recipe</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="recipe" data-aos="zoom-in">
                        <img src="images/dumplings.jpg" alt="Dumplings" className="ALTRA"/>
                        <h3>Chinese Dumplings</h3>
                        <p>Steamed or fried dumplings filled with meat or vegetables.</p>
                        <a className="recbtn" onClick="openModal('recipeModal6')">View Recipe</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <footer>
        <p>&copy; 2024 Culinary Chronicles | All Rights Reserved</p>
    </footer>
    <div className="modal" id="loginModal" >
        <div className="modal-content">
            <span className="close" onClick="closeModal('loginModal')">&times;</span>
            <h2>Login</h2>
            <input type="text" id="loginUser" placeholder="Username" required />
            <input type="password" id="loginPass" placeholder="Password" required />
            <button onClick="login()">Login</button>
            <p>New to the site? <a onClick="openModal('signupModal')" id="sn">Sign up</a></p>
        </div>
    </div>

    <div className="modal" id="signupModal">
        <div className="modal-content">
            <span className="close" onClick="closeModal('signupModal')">&times;</span>
            <h2>Sign Up</h2>
            <input type="text" id="signupUser" placeholder="Username" required />
            <input type="email" id="signupEmail" placeholder="Email" required />
            <input type="password" id="signupPass" placeholder="Password" required />
            <input type="password" id="signupConfirmPass" placeholder="Confirm Password" required />
            <button onClick="signup()">Sign Up</button>
            <p>Existing user? <a onClick="openModal('loginModal'), closeModal('signupModal')" id="sn">login</a></p>
        </div>
    </div>

    <div className="modal" id="recipeModal1">
    <div className="modal-content">
        <span className="close" onClick="closeModal('recipeModal1')">&times;</span>
        <h2 id="recipeTitle">Butter Chicken</h2>
        <h4>Ingredients:</h4>
        Chicken, Butter, Tomatoes, Onions, Spices (garam masala, cumin, coriander), Cream. <br /> <br />
        <p id="recipeContent">A rich and creamy Indian chicken curry made with marinated chicken cooked in a buttery tomato sauce.</p>
        <button onClick="closeModal('recipeModal1'),openModal('loginModal')">Login to view more</button>
    </div>
</div>

<div className="modal" id="recipeModal2">
    <div className="modal-content">
        <span className="close" onClick="closeModal('recipeModal2')">&times;</span>
        <h2 id="recipeTitle">Tacos</h2>
        <h4>Ingredients:</h4>
        Tortillas, Ground beef or chicken, Lettuce, Cheese, Salsa, Avocado. <br /> <br />
        <p id="recipeContent">Traditional Mexican dish consisting of folded or rolled tortillas filled with various ingredients, such as beef, chicken, or vegetables.</p>
        <button onClick="closeModal('recipeModal2'),openModal('loginModal')">Login to view more</button>
    </div>
</div>

<div className="modal" id="recipeModal3">
    <div className="modal-content">
        <span className="close" onClick="closeModal('recipeModal3')">&times;</span>
        <h2 id="recipeTitle">Margherita Pizza</h2>
        <h4>Ingredients:</h4>
        Pizza dough, Tomato sauce, Fresh mozzarella, Basil leaves, Olive oil. <br/><br/>
        <p id="recipeContent">classNameic Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil.</p>
        <button onClick="closeModal('recipeModal3'),openModal('loginModal')">Login to view more</button>
    </div>
</div>

<div className="modal" id="recipeModal4">
    <div className="modal-content">
        <span className="close" onClick="closeModal('recipeModal4')">&times;</span>
        <h2 id="recipeTitle">Sushi</h2>
        <h4>Ingredients:</h4>
        Sushi rice, Nori (seaweed), Fresh fish (salmon, tuna), Vegetables (cucumber, avocado), Soy sauce. <br/> <br/>
        <p id="recipeContent">Japanese dish consisting of vinegared rice accompanied by various ingredients, often including seafood and vegetables.</p>
        <button onClick="closeModal('recipeModal4'),openModal('loginModal')">Login to view more</button>
    </div>
</div>

<div className="modal" id="recipeModal5">
    <div className="modal-content">
        <span className="close" onClick="closeModal('recipeModal5')">&times;</span>
        <h2 id="recipeTitle">Croissant</h2>
        <h4>Ingredients:</h4>
            Flour, Butter, Yeast, Milk, Sugar, Salt. <br/> <br/>
        <p id="recipeContent">Flaky French pastry made from a layered yeast-leavened dough, perfect for breakfast or as a snack.</p>
         <button onClick="closeModal('recipeModal5'),openModal('loginModal')">Login to view more</button>
    </div>
</div>

<div className="modal" id="recipeModal6">
    <div className="modal-content">
        <span className="close" onClick="closeModal('recipeModal6')">&times;</span>
        <h2 id="recipeTitle">Chinese Dumplings</h2>
        <h4>Ingredients:</h4>
        Dumpling wrappers, Ground pork or chicken, Cabbage, Green onions, Ginger, Soy sauce. <br/> <br/>
        <p id="recipeContent">Steamed or fried dumplings filled with meat or vegetables, commonly served with a dipping sauce.</p>
        <button onClick="closeModal('recipeModal6'),openModal('loginModal')">Login to view more</button>
    </div>
</div>

    
</div>
  );
}

export default App;
