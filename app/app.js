const pages = {
    home: `<div class="home-content">
       <h1>Hanahaki</h1>
       <h2>Professional Ikebana Flower Arrangements</h2>
        <div class="home-image-holder">
        </div>
        <div class="home-text">
            <p>Welcome to Hanahaki, where traditional Ikebana art meets modern aesthetics. Our skilled artisans create stunning flower arrangements that bring beauty and tranquility to any space.</p>
            <p>Explore our portfolio to see our exquisite designs, learn about our story in the About section, or get in touch with us through the Contact page. Let us help you bring the art of Ikebana into your life.</p>
        </div>
</div>`,
portfolio: `  <div class="portfolio-holder">
            <h1><span>&#10048</span>Portfolio<span>&#10048</span></h1>
            <p>Here are some examples of past works done at Hanahaki. Each piece is custom made to fit themes and meaning provided by the customer.</p>

            <div class="image-holder">
            <div class="portf-image"><img src="https://images.unsplash.com/photo-1564868405024-af2aa9752aac?q=80&w=893&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></div>
            <div class="portf-image"><img src="https://images.unsplash.com/photo-1584515453937-c00929e621d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SWtlYmFuYXxlbnwwfHwwfHx8MA%3D%3D" alt=""></div>
             <div class="portf-image"><img src="https://plus.unsplash.com/premium_photo-1676478746772-02c9709a32c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SWtlYmFuYXxlbnwwfHwwfHx8MA%3D%3D" alt=""></div>
             <div class="portf-image"><img src="https://images.unsplash.com/photo-1548262016-9bf97ff61020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fElrZWJhbmF8ZW58MHx8MHx8fDA%3D" alt=""></div>
             <div class="portf-image"><img src="https://media.istockphoto.com/id/170121553/photo/ikebana.webp?a=1&b=1&s=612x612&w=0&k=20&c=sIegziKfRFKnTI-g_kfJ5jQFUEh9iTmYigfhKZdqpEg=" alt=""></div>
             <div class="portf-image"><img src="https://images.unsplash.com/photo-1578394349001-9302cf6d8d39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fElrZWJhbmF8ZW58MHx8MHx8fDA%3D" alt=""></div>
             <div class="portf-image"><img src="https://images.pexels.com/photos/36745140/pexels-photo-36745140.jpeg" alt=""></div>
             <div class="portf-image"><img src="https://images.pexels.com/photos/36745151/pexels-photo-36745151.jpeg" alt=""></div>
             <div class="portf-image"><img src="https://images.pexels.com/photos/36745142/pexels-photo-36745142.jpeg" alt=""></div>
             </div>

             <div class="popup-imag">
                <span>&times;</span>
                <img src="https://images.unsplash.com/photo-1564868405024-af2aa9752aac?q=80&w=893&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
             </div>
        </div>`,

}


//portfolio page content

document.querySelectorAll('.image-holder img').forEach(image => {
    image.addEventListener('click', () => {
        document.querySelector('.popup-imag').style.display = 'block';
        document.querySelector('.popup-imag img').src = image.getAttribute('src');
    });
});

document.querySelector('.popup-imag span').addEventListener('click', () => {
    document.querySelector('.popup-imag').style.display= 'none';
});
