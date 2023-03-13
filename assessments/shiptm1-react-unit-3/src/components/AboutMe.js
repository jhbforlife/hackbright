import Card from './Card.js';

const AboutMe = () => {
    return (
        <Card heading="About Me" body={
            // Imported text from demo code
            <p>I'm a lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam euismod faucibus tincidunt. Integer elementum risus laoreet
                elit tempus porttitor. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Etiam ultricies quis elit a maximus. Sed
                suscipit libero sem, vitae aliquam mi gravida nec. Fusce sed
                bibendum odio. Praesent rutrum tincidunt purus eget varius.</p>
        } />
    );
};

export default AboutMe;